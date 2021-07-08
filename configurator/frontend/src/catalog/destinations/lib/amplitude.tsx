import { Destination } from '../types';
import { filteringExpressionDocumentation, modeParameter, tableName } from './common';
import { stringType } from '../../sources/types';
import * as React from 'react';

const icon = <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64" width="64" height="64">
  <g>
    <path className="st0" d="M28.2,14.4C28,14.2,27.8,14,27.6,14c-0.2,0-0.3,0.1-0.5,0.2c-1.7,1.3-4,7-5.9,14.5l1.7,0
		c3.3,0,6.8,0.1,10.2,0.1c-0.9-3.4-1.7-6.4-2.5-8.7C29.4,16.6,28.7,15.1,28.2,14.4z"/>
    <path className="st0" d="M32,0C14.3,0,0,14.3,0,32s14.3,32,32,32s32-14.3,32-32S49.7,0,32,0z M55,32.6L55,32.6c0,0-0.1,0.1-0.1,0.1l0,0
		l-0.1,0l-0.1,0l0,0c-0.2,0.1-0.5,0.2-0.8,0.2H38.8c0.1,0.5,0.3,1.1,0.4,1.7c0.8,3.6,3,13.1,5.4,13.1h0.1h0h0c1.8,0,2.8-2.6,4.8-8.4
		l0-0.1c0.3-0.9,0.7-2,1.1-3.1l0.1-0.3l0,0c0.1-0.4,0.5-0.6,0.9-0.5c0.4,0.1,0.6,0.5,0.5,0.9l0,0L52,36.6c-0.2,0.7-0.4,1.6-0.7,2.7
		c-1.2,5.1-3.1,12.7-7.8,12.7h0c-3.1,0-4.9-4.9-5.7-7c-1.5-3.9-2.6-8.1-3.6-12.1h-14l-2.9,9.3l0,0c-0.4,0.7-1.3,0.9-2,0.5
		c-0.4-0.3-0.7-0.7-0.7-1.2v-0.1l0.2-1c0.4-2.4,0.9-4.9,1.4-7.4h-5.9l0,0c-1.1-0.2-1.9-1.1-1.9-2.2c0-1.1,0.8-2,1.8-2.2
		c0.2,0,0.5,0,0.7,0h0.3c1.9,0,3.8,0.1,6,0.1c3.1-12.5,6.6-18.8,10.6-18.9c4.2,0,7.4,9.7,9.9,19.1l0,0c5.2,0.1,10.7,0.3,16,0.6
		l0.2,0c0.1,0,0.2,0,0.3,0h0h0h0c0.9,0.2,1.5,1.1,1.3,2C55.5,32,55.3,32.3,55,32.6z"/>
  </g>
</svg>;

const amplitudeDestination = {
  description: <>
    Jitsu can send events from JS SDK or Events API to <a href="https://developers.amplitude.com/docs/http-api-v2>">Amplitude API</a>.
  </>,
  syncFromSourcesStatus: 'not_supported',
  id: 'amplitude',
  type: 'other',
  displayName: 'Amplitude',
  ui: {
    icon,
    title: (cfg) => `API Key: ${cfg._formData.apiKey.substr(0, cfg._formData.apiKey.length / 2)}*****`,
    connectCmd: (_) => null
  },
  parameters: [
    modeParameter('stream'),
    tableName(filteringExpressionDocumentation),
    {
      id: '_formData.apiKey',
      displayName: 'API Key',
      required: true,
      type: stringType,
      documentation: <>
        Your Amplitude API Key from Project Settings page.
      </>
    }
  ]
}  as const;

export default amplitudeDestination;
