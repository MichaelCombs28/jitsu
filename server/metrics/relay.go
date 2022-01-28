package metrics

import (
	"context"
	"net/http"
	"sync"
	"time"

	"github.com/carlmjohnson/requests"
	"github.com/jitsucom/jitsu/server/logging"
	"github.com/jitsucom/jitsu/server/resources"
	"github.com/jitsucom/jitsu/server/safego"
	"github.com/jitsucom/jitsu/server/timestamp"
	"github.com/pkg/errors"
	"github.com/prometheus/client_golang/prometheus"
	dto "github.com/prometheus/client_model/go"
)

// DefaultRelayURL is the URL which is used by default for relaying metrics.
var DefaultRelayURL = "https://cplane.jitsu.com/api/prometheus/relay/submit"

// SensitiveLabels are label names which values should be hashed
// in order to respect users' privacy.
var SensitiveLabels = map[string]bool{
	"source_id":      true,
	"destination_id": true,
}

// RelayTrigger is basically an interface of time.Ticker.
// Triggers are responsible for emitting events on the channel returned by Channel
// when some conditions for relay execution are met.
type RelayTrigger interface {

	// Channel returns the channel which events are emitted to.
	// The returned channel values are ignored.
	Channel() <-chan time.Time

	// Stop stops this trigger from emitting events.
	Stop()
}

// TickerTrigger wraps the stdlib time.Ticker into RelayTrigger interface.
type TickerTrigger struct {
	*time.Ticker
}

func (t TickerTrigger) Channel() <-chan time.Time {
	return t.C
}

type Relay struct {
	URL          string
	HostID       string
	DeploymentID string
	Timeout      time.Duration
	work         sync.WaitGroup
	cancel       func()
}

func (r *Relay) Run(rootCtx context.Context, trigger RelayTrigger, gatherer prometheus.Gatherer) {
	r.Stop()
	ctx, cancel := context.WithCancel(rootCtx)
	r.cancel = cancel
	r.work.Add(1)
	safego.Run(func() {
		defer func() {
			trigger.Stop()
			_ = r.Relay(rootCtx, gatherer) // scrape final metrics state on shutdown
			r.cancel()
			r.work.Done()
		}()

		for {
			select {
			case <-trigger.Channel():
				if err := r.Relay(ctx, gatherer); err != nil {
					if ctx.Err() != nil {
						return
					}

					logging.Debugf("Error sending metrics relay data: %s", err)
				}

			case <-ctx.Done():
				return
			}
		}
	})
}

func (r *Relay) Stop() {
	if r.cancel != nil {
		r.cancel()
		r.work.Wait()
		r.cancel = nil
		r.work = sync.WaitGroup{}
	}
}

type RelayData struct {
	Timestamp    int64               `json:"timestamp"`
	HostID       string              `json:"hostId"`
	DeploymentID string              `json:"deploymentId"`
	Data         []*dto.MetricFamily `json:"data"`
}

// Relay is responsible for relaying all metrics data from Registry
// to some HTTP endpoint via POST request with JSON body (see RelayData)
// while also hashing sensitive label values.
func (r *Relay) Relay(ctx context.Context, gatherer prometheus.Gatherer) error {
	data, err := gatherer.Gather()
	if err != nil {
		return errors.Wrap(err, "gather metrics")
	}

	for _, metricFamily := range data {
		for _, metric := range metricFamily.Metric {
			for _, label := range metric.Label {
				if label.Name == nil || label.Value == nil || !SensitiveLabels[*label.Name] {
					continue
				}

				hashedValue := resources.GetStringHash(*label.Value)
				label.Value = &hashedValue
			}
		}
	}

	ctx, cancel := context.WithTimeout(ctx, r.Timeout)
	defer cancel()

	if err := requests.URL(r.URL).
		Method(http.MethodPost).
		BodyJSON(RelayData{
			Timestamp:    timestamp.Now().UnixMilli(),
			HostID:       r.HostID,
			DeploymentID: r.DeploymentID,
			Data:         data,
		}).
		CheckStatus(http.StatusOK).
		Fetch(ctx); err != nil {
		return errors.Wrap(err, "send metrics")
	}

	return nil
}
