import { ReactElement } from "react"
import styles from "./JitsuClientLibrary.module.less"

export type JitsuLibProps = {
  name: string
  icon: ReactElement
  link: string
  comingSoon?: boolean
}

const reactIcon = (
  <svg viewBox="0 0 23 20.46348">
    <path
      fill="currentColor"
      d="M18.9107,6.63257h0q-.36721-.126-.74042-.2333.06187-.25141.11441-.505c.56045-2.72064.194-4.91237-1.05739-5.63386-1.1998-.692-3.1621.02952-5.14394,1.75414q-.29293.2555-.57267.52554-.18727-.17951-.3811-.352C9.05257.3439,6.97066-.43316,5.72058.29046,4.52191.98436,4.16686,3.04489,4.67144,5.62322q.0753.383.17.76179c-.29458.08367-.57908.17284-.85127.26771C1.55514,7.50165,0,8.83225,0,10.21231c0,1.42546,1.66935,2.8552,4.20575,3.722q.3085.10494.62193.19442-.10179.408-.18068.82114c-.48106,2.53354-.10535,4.54521,1.09017,5.23484,1.23481.712,3.30725-.01985,5.32533-1.78387q.23926-.20917.47994-.44238.3029.29225.62173.56727c1.95477,1.68207,3.88531,2.36132,5.07982,1.66986,1.23369-.71416,1.63454-2.87525,1.114-5.50459q-.05955-.30124-.13792-.61481.21834-.06443.42772-.13355C21.28454,13.06915,23,11.65681,23,10.21232,23,8.82726,21.39478,7.48771,18.9107,6.63257ZM12.7284,2.75581C14.42646,1.278,16.01346.69457,16.73657,1.1116h0c.77014.44421,1.06971,2.2354.5858,4.58441q-.04758.22953-.10342.45724a23.53752,23.53752,0,0,0-3.07527-.48584A23.08128,23.08128,0,0,0,12.1995,3.24094Q12.45788,2.99184,12.7284,2.75581ZM6.79111,11.39124q.312.60265.65207,1.19013.34692.59911.7221,1.18117a20.92168,20.92168,0,0,1-2.11967-.3408C6.24867,12.766,6.49887,12.08443,6.79111,11.39124ZM6.79,9.08041c-.28613-.67863-.53093-1.34586-.73085-1.99019.65624-.14688,1.356-.26689,2.08516-.358q-.36611.571-.7051,1.15877Q7.10076,8.478,6.79,9.08041Zm.52228,1.15552q.45411-.94517.9783-1.8542v.0002q.52369-.90857,1.11521-1.77542c.684-.05171,1.38536-.07879,2.09432-.07879.71212,0,1.41437.02728,2.09819.0794q.58514.86487,1.10818,1.76941.52565.90635.99153,1.84545-.46083.94817-.98828,1.86173h-.0001q-.52261.90786-1.1034,1.7803c-.6824.04876-1.3876.0739-2.10623.0739-.71568,0-1.41193-.02229-2.08241-.06575q-.59555-.86995-1.12406-1.78305Q7.76789,11.18148,7.31227,10.23593Zm8.24853,2.33862q.347-.60182.667-1.21863h0a20.86671,20.86671,0,0,1,.77238,2.02327,20.85164,20.85164,0,0,1-2.14552.36573Q15.21935,13.16682,15.5608,12.57455Zm.65767-3.49343q-.31883-.605-.66163-1.19684h0q-.33727-.58258-.6994-1.15022c.7339.09263,1.437.21579,2.09717.36654A20.95909,20.95909,0,0,1,16.21847,9.08112ZM11.511,3.94359a21.01288,21.01288,0,0,1,1.3535,1.63393q-1.35843-.06419-2.7184-.00061C10.593,4.98765,11.0507,4.44022,11.511,3.94359ZM6.21284,1.14081c.76953-.44543,2.47095.18973,4.26428,1.782.11461.10179.22974.20836.34507.3186A23.54542,23.54542,0,0,0,8.86294,5.66608a24.008,24.008,0,0,0-3.06916.477q-.088-.35228-.15808-.70866v.0001C5.20339,3.22536,5.49044,1.559,6.21284,1.14081ZM5.09132,13.18233q-.286-.08187-.56778-.17773A8.32371,8.32371,0,0,1,1.841,11.57955a2.03072,2.03072,0,0,1-.85849-1.36724c0-.83742,1.24865-1.90571,3.33117-2.63178q.39208-.1361.79162-.24908a23.56455,23.56455,0,0,0,1.121,2.90478A23.92247,23.92247,0,0,0,5.09132,13.18233ZM10.41594,17.661a8.32161,8.32161,0,0,1-2.57467,1.61184h-.0001a2.03042,2.03042,0,0,1-1.61306.06067c-.72556-.41836-1.02706-2.03376-.61573-4.20035q.07337-.38407.168-.76363a23.10444,23.10444,0,0,0,3.0995.44869,23.90954,23.90954,0,0,0,1.97431,2.43929Q10.64,17.46459,10.41594,17.661Zm1.12223-1.11053c-.46569-.50253-.93015-1.05831-1.38383-1.65612q.66051.026,1.34566.02606.70326,0,1.38841-.03084A20.89425,20.89425,0,0,1,11.53817,16.55045Zm5.96651,1.367a2.03039,2.03039,0,0,1-.753,1.4278c-.72485.41958-2.275-.12581-3.94659-1.56431q-.2875-.24735-.57837-.52727a23.08914,23.08914,0,0,0,1.9279-2.448,22.93647,22.93647,0,0,0,3.11507-.48014q.07024.284.12449.55638h0A8.32,8.32,0,0,1,17.50468,17.91749Zm.83417-4.90739h-.0001c-.12571.04163-.25478.08184-.38629.12082a23.06121,23.06121,0,0,0-1.16468-2.91373,23.05112,23.05112,0,0,0,1.11938-2.87128c.23524.0682.46365.14.68372.21579,2.12842.73258,3.42665,1.81593,3.42665,2.65061C22.01753,11.10145,20.61538,12.25574,18.33885,13.0101Z"
    />
    <path
      fill="currentColor"
      d="M11.5,8.1585a2.05386,2.05386,0,1,1-2.05381,2.05381A2.05381,2.05381,0,0,1,11.5,8.1585"
    />
  </svg>
)
export const jitsuClientLibraries: Record<string, JitsuLibProps> = {
  jsNpm: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path
          fill="currentColor"
          d="M 5.4648438 2 A 1.0001 1.0001 0 0 0 4.46875 3.0898438 L 7.9882812 42.515625 A 1.0001 1.0001 0 0 0 8.7089844 43.388672 L 24.71875 47.960938 A 1.0001 1.0001 0 0 0 25.267578 47.960938 L 41.292969 43.388672 A 1.0001 1.0001 0 0 0 42.013672 42.515625 L 45.53125 3.0898438 A 1.0001 1.0001 0 0 0 44.535156 2 L 5.4648438 2 z M 6.5585938 4 L 43.441406 4 L 40.083984 41.654297 L 24.994141 45.960938 L 9.9199219 41.654297 L 6.5585938 4 z M 19 10 A 1.0001 1.0001 0 0 0 18 11 L 18 29.628906 L 12.267578 28.041016 A 1.0001 1.0001 0 0 0 11 29.003906 L 11 33.949219 A 1.0001 1.0001 0 0 0 11.732422 34.912109 L 22.732422 37.962891 A 1.0001 1.0001 0 0 0 24 37 L 24 11 A 1.0001 1.0001 0 0 0 23 10 L 19 10 z M 27 10 A 1.0001 1.0001 0 0 0 26 11 L 26 28 A 1.0001 1.0001 0 0 0 27.169922 28.986328 L 32.917969 27.996094 L 32.798828 29.767578 L 26.734375 31.435547 A 1.0001 1.0001 0 0 0 26 32.398438 L 26 37 A 1.0001 1.0001 0 0 0 27.265625 37.964844 L 37.265625 35.214844 A 1.0001 1.0001 0 0 0 37.996094 34.335938 L 39.050781 22.085938 A 1.0001 1.0001 0 0 0 37.914062 21.009766 L 32 21.847656 L 32 16 L 38.654297 16 A 1.0001 1.0001 0 0 0 39.650391 15.085938 L 39.996094 11.085938 A 1.0001 1.0001 0 0 0 39 10 L 27 10 z M 20 12 L 22 12 L 22 35.685547 L 13 33.189453 L 13 30.318359 L 18.732422 31.908203 A 1.0001 1.0001 0 0 0 20 30.945312 L 20 12 z M 28 12 L 37.910156 12 L 37.736328 14 L 31 14 A 1.0001 1.0001 0 0 0 30 15 L 30 23 A 1.0001 1.0001 0 0 0 31.140625 23.990234 L 36.951172 23.166016 L 36.0625 33.470703 L 28 35.6875 L 28 33.162109 L 34.015625 31.507812 A 1.0001 1.0001 0 0 0 34.748047 30.611328 L 34.998047 26.861328 A 1.0001 1.0001 0 0 0 33.830078 25.808594 L 28 26.8125 L 28 12 z"
        />
      </svg>
    ),
    name: "JavaScript (NPM)",
    link: "https://jitsu.com/docs/sending-data/js-sdk/package",
  },
  jsEmbedded: {
    icon: (
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
        {" "}
        <path d="M 12.890625 3 C 12.383625 3 11.958344 3.3817656 11.902344 3.8847656 L 10.123047 19.896484 C 10.057047 20.485484 10.517375 21 11.109375 21 C 11.615375 21 12.041656 20.618234 12.097656 20.115234 L 13.876953 4.1035156 C 13.942953 3.5145156 13.482625 3 12.890625 3 z M 5.7070312 6.7070312 C 5.4510313 6.7070312 5.195 6.805 5 7 L 0.70703125 11.292969 C 0.31603125 11.683969 0.31603125 12.317031 0.70703125 12.707031 L 5 17 C 5.39 17.39 6.0240625 17.39 6.4140625 17 C 6.8040625 16.61 6.8040625 15.975938 6.4140625 15.585938 L 2.828125 12 L 6.4140625 8.4140625 C 6.8050625 8.0240625 6.8050625 7.39 6.4140625 7 C 6.2190625 6.805 5.9630312 6.7070312 5.7070312 6.7070312 z M 18.292969 6.7070312 C 18.036969 6.7070312 17.780938 6.805 17.585938 7 C 17.195937 7.39 17.195937 8.0240625 17.585938 8.4140625 L 21.171875 12 L 17.585938 15.585938 C 17.195937 15.975938 17.195937 16.61 17.585938 17 C 17.975938 17.39 18.61 17.39 19 17 L 23.292969 12.707031 C 23.683969 12.316031 23.683969 11.682969 23.292969 11.292969 L 19 7 C 18.805 6.805 18.548969 6.7070312 18.292969 6.7070312 z" />
      </svg>
    ),
    name: "HTML Snippet",
    link: "https://jitsu.com/docs/sending-data/js-sdk/snippet",
  },
  api: {
    icon: (
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {" "}
        <path d="M 10.490234 2 C 10.011234 2 9.6017656 2.3385938 9.5097656 2.8085938 L 9.1757812 4.5234375 C 8.3477813 4.8354375 7.5926406 5.2695 6.9316406 5.8125 L 5.2871094 5.2460938 C 4.8341094 5.0900938 4.3357031 5.2783594 4.0957031 5.6933594 L 2.5859375 8.3066406 C 2.3469375 8.7216406 2.4339219 9.2485 2.7949219 9.5625 L 4.1132812 10.708984 C 4.0362813 11.179984 4 11.602 4 12 C 4 12.395 4.0372812 12.817969 4.1132812 13.292969 L 2.7949219 14.439453 C 2.4339219 14.753453 2.3469375 15.280312 2.5859375 15.695312 L 4.0957031 18.308594 C 4.3347031 18.722594 4.8341094 18.909906 5.2871094 18.753906 L 6.9316406 18.1875 C 7.5946406 18.7315 8.3487813 19.166516 9.1757812 19.478516 C 9.1757812 19.478516 9.2236562 20.001953 9.4726562 21.001953 C 9.7206562 22.001953 10.515625 22.001953 10.515625 22.001953 L 10.945312 22.001953 L 12.626953 16.423828 C 12.881953 15.577828 13.659016 15 14.541016 15 L 21.814453 15 L 21.826172 14.978516 L 19.886719 13.291016 C 19.963719 12.820016 20 12.398 20 12 C 20 11.602 19.963719 11.179031 19.886719 10.707031 L 21.205078 9.5605469 C 21.566078 9.2465469 21.653062 8.7196875 21.414062 8.3046875 L 19.904297 5.6914062 C 19.665297 5.2774063 19.165891 5.0900938 18.712891 5.2460938 L 17.068359 5.8125 C 16.405359 5.2685 15.651219 4.8334844 14.824219 4.5214844 L 14.490234 2.8085938 C 14.399234 2.3385937 13.988766 2 13.509766 2 L 10.490234 2 z M 12 9 C 13.657 9 15 10.343 15 12 C 15 13.657 13.657 15 12 15 C 10.343 15 9 13.657 9 12 C 9 10.343 10.343 9 12 9 z M 14.345703 17 L 13 22 L 14.052734 22 L 14.310547 21 L 15.677734 21 L 15.9375 22 L 17 22 L 15.646484 17 L 14.345703 17 z M 18 17 L 18 22 L 19 22 L 19 20 L 19.5 20 C 20.328 20 21 19.328 21 18.5 C 21 17.672 20.328 17 19.5 17 L 18 17 z M 22 17 L 22 22 L 23 22 L 23 17 L 22 17 z M 19 18 L 19.5 18 C 19.776 18 20 18.224 20 18.5 C 20 18.776 19.776 19 19.5 19 L 19 19 L 19 18 z M 14.992188 18.353516 L 15.419922 20 L 14.568359 20 L 14.992188 18.353516 z" />
      </svg>
    ),
    name: "Backend APIs",
    link: "https://jitsu.com/docs/sending-data/api",
  },
  react: {
    icon: reactIcon,
    name: "React",
    link: "https://jitsu.com/docs/sending-data/js-sdk/react",
  },
  nuxt: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <g fillRule="nonzero" transform="translate(0 50)" fill="none">
          <path
            d="M227.92099 83.45116l-13.6889 24.10141-46.8148-82.44693L23.7037 278.17052h97.3037c0 13.31084 10.61252 24.10142 23.70371 24.10142H23.70371c-8.46771 0-16.29145-4.59601-20.5246-12.05272-4.23315-7.4567-4.23272-16.64312.00114-24.0994L146.89383 13.05492c4.23415-7.45738 12.0596-12.05138 20.5284-12.05138 8.46878 0 16.29423 4.594 20.52839 12.05138l39.97037 70.39623z"
            fill="currentColor"
          />
          <path
            d="M331.6642 266.11981l-90.05432-158.56724-13.6889-24.10141-13.68888 24.10141-90.04445 158.56724c-4.23385 7.45629-4.23428 16.64271-.00113 24.09941 4.23314 7.4567 12.05689 12.05272 20.5246 12.05272h166.4c8.46946 0 16.29644-4.591 20.532-12.04837 4.23555-7.45736 4.23606-16.64592.00132-24.10376h.01976zM144.7111 278.17052L227.921 131.65399l83.19012 146.51653h-166.4z"
            fill="#2F495E"
          />
          <path
            d="M396.04938 290.22123c-4.23344 7.45557-12.05656 12.0507-20.52345 12.0507H311.1111c13.0912 0 23.7037-10.79057 23.7037-24.10141h40.66173L260.09877 74.98553l-18.4889 32.56704L227.921 83.45116l11.65432-20.51634c4.23416-7.45738 12.0596-12.05138 20.5284-12.05138 8.46879 0 16.29423 4.594 20.52839 12.05138l115.41728 203.185c4.23426 7.457 4.23426 16.6444 0 24.1014z"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    name: "Nuxt",
    link: "https://jitsu.com/docs/sending-data/js-sdk/nuxt",
  },
  iOS: {
    icon: (
      <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M 15 3 C 8.3845336 3 3 8.3845336 3 15 L 3 35 C 3 41.615466 8.3845336 47 15 47 L 35 47 C 41.615466 47 47 41.615466 47 35 L 47 15 C 47 8.3845336 41.615466 3 35 3 L 15 3 z M 15 5 L 35 5 C 40.534534 5 45 9.4654664 45 15 L 45 35 C 45 40.534534 40.534534 45 35 45 L 15 45 C 9.4654664 45 5 40.534534 5 35 L 5 15 C 5 9.4654664 9.4654664 5 15 5 z M 11.615234 18.066406 C 10.912234 18.066406 10.394531 18.567563 10.394531 19.226562 C 10.394531 19.876563 10.912234 20.376953 11.615234 20.376953 C 12.318234 20.376953 12.837891 19.876562 12.837891 19.226562 C 12.837891 18.567562 12.318234 18.066406 11.615234 18.066406 z M 22.037109 18.636719 C 18.398109 18.636719 16.113281 21.18525 16.113281 25.28125 C 16.113281 29.36825 18.354109 31.933594 22.037109 31.933594 C 25.711109 31.933594 27.943359 29.35925 27.943359 25.28125 C 27.943359 21.19425 25.693109 18.637719 22.037109 18.636719 z M 34.966797 18.636719 C 32.198797 18.636719 30.351562 20.139437 30.351562 22.398438 C 30.351562 24.261437 31.397406 25.37025 33.691406 25.90625 L 35.326172 26.302734 C 37.005172 26.697734 37.744141 27.277141 37.744141 28.244141 C 37.744141 29.369141 36.583953 30.185547 35.001953 30.185547 C 33.306858 30.185547 32.128927 29.421639 31.960938 28.21875 L 30.007812 28.21875 C 30.148813 30.48675 32.037609 31.935547 34.849609 31.935547 C 37.855609 31.935547 39.736328 30.416234 39.736328 27.990234 C 39.736328 26.083234 38.6645 25.027875 36.0625 24.421875 L 34.666016 24.078125 C 33.014016 23.691125 32.345703 23.172578 32.345703 22.267578 C 32.345703 21.124578 33.383453 20.378906 34.939453 20.378906 C 36.416453 20.378906 37.434141 21.106391 37.619141 22.275391 L 39.535156 22.275391 C 39.421156 20.139391 37.541797 18.636719 34.966797 18.636719 z M 22.037109 20.472656 C 24.446109 20.472656 25.931641 22.33725 25.931641 25.28125 C 25.931641 28.20725 24.445109 30.097656 22.037109 30.097656 C 19.603109 30.097656 18.126953 28.20825 18.126953 25.28125 C 18.126953 22.33725 19.646109 20.473656 22.037109 20.472656 z M 10.675781 22.056641 L 10.675781 31.626953 L 12.556641 31.626953 L 12.556641 22.056641 L 10.675781 22.056641 z" />
      </svg>
    ),
    name: "iOS",
    link: "https://jitsu.com/docs/sending-data/mobile-apps/ios-sdk",
  },
  android: {
    icon: (
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path
          fill="currentColor"
          d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"
        />
        <path
          fill="currentColor"
          d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"
        />
        <path
          fill="currentColor"
          d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"
        />
      </svg>
    ),
    name: "Andriod",
    link: "https://jitsu.com/docs/sending-data/mobile-apps/android-sdk",
    comingSoon: true,
  },
  reactNative: {
    icon: reactIcon,
    name: "React Native",
    link: "https://jitsu.com/docs/sending-data/mobile-apps/react-native-sdk",
    comingSoon: true,
  },
  nextJs: {
    icon: (
      <svg viewBox=".5 -.2 1023 1024.1" className="full-current">
        <path
          fill="currentColor"
          d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
        />
        <path
          fill="currentColor"
          d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"
        />
      </svg>
    ),
    name: "NextJS",
    link: "https://jitsu.com/docs/sending-data",
    comingSoon: true,
  },
}

const JitsuClientLibraryCard: React.FC<JitsuLibProps> = props => {
  return (
    <a href={props.link} className="relative group flex flex-col items-center justify-center">
      {props.comingSoon && (
        <div className="absolute -right-2 -top-2 rounded text-xxs z-50 bg-primary px-1 py-0.5 text-text">Soon</div>
      )}
      <div
        className={`group-hover:bg-textPale transform transition duration-400 ease-in-out hover:-translate-y-0.5 h-12 w-12 p-2 flex items-center rounded-xl justify-center bg-text text-bgPrimary ${styles.icon}`}
      >
        {props.icon}
      </div>
      <div className="group-hover:text-textPale mt-1 text-xs text-secondaryText h-6 w-12 text-center">{props.name}</div>
    </a>
  )
}

export default JitsuClientLibraryCard