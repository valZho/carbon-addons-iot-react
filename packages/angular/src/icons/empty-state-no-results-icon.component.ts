/* tslint:disable */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'empty-state-no-results-icon',
  template: `
    <svg
      [ngClass]="iconClass"
      width="80px"
      height="80px"
      viewBox="0 0 80 80"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>No search results found(80px)</title>
      <defs>
        <linearGradient
          x1="43.3387909%"
          y1="40.6455672%"
          x2="63.8444921%"
          y2="82.2721774%"
          id="linearGradient-1"
        >
          <stop stop-color="#000000" stop-opacity="0.12" offset="0%"></stop>
          <stop stop-color="#000000" stop-opacity="0.29" offset="99%"></stop>
        </linearGradient>
        <linearGradient
          x1="105.926826%"
          y1="49.9367889%"
          x2="-5.87282301%"
          y2="49.9367889%"
          id="linearGradient-2"
        >
          <stop stop-color="#C9C9C9" offset="0%"></stop>
          <stop stop-color="#666666" offset="73%"></stop>
        </linearGradient>
        <radialGradient
          cx="55.4066676%"
          cy="107.842226%"
          fx="55.4066676%"
          fy="107.842226%"
          r="139.225253%"
          gradientTransform="translate(0.554067,1.078422),scale(0.297905,1.000000),rotate(-29.899692),translate(-0.554067,-1.078422)"
          id="radialGradient-3"
        >
          <stop stop-color="#FFFFFF" stop-opacity="0" offset="12%"></stop>
          <stop stop-color="#FFFFFF" stop-opacity="0.38" offset="100%"></stop>
        </radialGradient>
        <linearGradient
          x1="39.9092971%"
          y1="60.0255781%"
          x2="57.7097506%"
          y2="37.1652993%"
          id="linearGradient-4"
        >
          <stop stop-color="#666666" offset="0%"></stop>
          <stop stop-color="#C2C2C2" offset="68%"></stop>
        </linearGradient>
        <radialGradient
          cx="55.4268711%"
          cy="55.5698932%"
          fx="55.4268711%"
          fy="55.5698932%"
          r="71.7495657%"
          gradientTransform="translate(0.554269,0.555699),scale(0.578097,1.000000),rotate(-29.899692),translate(-0.554269,-0.555699)"
          id="radialGradient-5"
        >
          <stop stop-color="#FFFFFF" stop-opacity="0" offset="12%"></stop>
          <stop stop-color="#FFFFFF" stop-opacity="0.17" offset="100%"></stop>
        </radialGradient>
        <linearGradient
          x1="-0.672223716%"
          y1="49.8994975%"
          x2="100%"
          y2="49.8994975%"
          id="linearGradient-6"
        >
          <stop stop-color="#FFFFFF" offset="1%"></stop>
          <stop stop-color="#292929" offset="99%"></stop>
        </linearGradient>
        <linearGradient
          x1="-4.07568892e-14%"
          y1="49.9864535%"
          x2="100%"
          y2="49.9864535%"
          id="linearGradient-7"
        >
          <stop stop-color="#E2E2E2" offset="0%"></stop>
          <stop stop-color="#959595" offset="17%"></stop>
          <stop stop-color="#6A6A6A" offset="55%"></stop>
          <stop stop-color="#727272" offset="89%"></stop>
          <stop stop-color="#ABABAB" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="38.7295441%"
          y1="103.107904%"
          x2="60.5930582%"
          y2="-0.765968533%"
          id="linearGradient-8"
        >
          <stop stop-color="#343434" offset="0%"></stop>
          <stop stop-color="#6E6E6E" offset="97%"></stop>
        </linearGradient>
        <linearGradient
          x1="28.9263035%"
          y1="83.2006858%"
          x2="67.1073807%"
          y2="4.63492735%"
          id="linearGradient-9"
        >
          <stop stop-color="#C8C8C8" offset="0%"></stop>
          <stop stop-color="#F3F3F3" offset="98%"></stop>
        </linearGradient>
        <linearGradient
          x1="40.8887815%"
          y1="40.8118685%"
          x2="106.484724%"
          y2="107.051724%"
          id="linearGradient-10"
        >
          <stop stop-color="#FFFFFF" offset="0%"></stop>
          <stop stop-color="#A5A5A5" offset="88%"></stop>
        </linearGradient>
        <linearGradient
          x1="26.1111347%"
          y1="-65.7142857%"
          x2="55.1316822%"
          y2="109.428571%"
          id="linearGradient-11"
        >
          <stop stop-color="#000000" stop-opacity="0.09" offset="0%"></stop>
          <stop stop-color="#000000" stop-opacity="0.39" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="57.0563872%"
          y1="57.0066684%"
          x2="36.7161933%"
          y2="44.2655622%"
          id="linearGradient-12"
        >
          <stop stop-color="#FFFFFF" stop-opacity="0.84" offset="11%"></stop>
          <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="24.7958442%"
          y1="89.4383906%"
          x2="64.4659219%"
          y2="-1.42497904%"
          id="linearGradient-13"
        >
          <stop stop-color="#2B2B2B" offset="0%"></stop>
          <stop stop-color="#9F9F9F" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="No-search-results-found(80px)"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Group" transform="translate(0.000000, 7.000000)" fill-rule="nonzero">
          <g id="Artboard-3">
            <g id="Layer0_5_FILL" transform="translate(23.157895, 64.595745)" fill="#B0B0B0">
              <polygon
                id="Path"
                points="0.442105263 0.912765957 0.624561404 0.442340426 0.301754386 0.442340426"
              ></polygon>
            </g>
            <g
              id="Layer0_5_MEMBER_0_FILL"
              transform="translate(0.000000, 21.063830)"
              fill="url(#linearGradient-1)"
            >
              <path
                d="M49.7824561,5.40638298 C44.102924,2.12978723 37.251462,0.491489362 29.2280702,0.491489362 C21.2046784,0.491489362 14.3602339,2.12978723 8.69473684,5.40638298 C3.24912281,8.5893617 0.41871345,12.3831915 0.203508772,16.7878723 L0.203508772,17.8410638 C0.272743631,19.2847712 0.635703878,20.6991578 1.27017544,21.9976596 C2.57076023,24.6797872 5.05497076,27.0810638 8.72280702,29.2014894 C14.3929825,32.4780851 21.2444444,34.116383 29.277193,34.116383 C37.2023392,34.116383 43.9859649,32.5085106 49.6280702,29.292766 L50.5684211,29.8544681 L50.6175439,29.8544681 C50.6311658,29.8496494 50.6460272,29.8496494 50.6596491,29.8544681 L52.7649123,31.0761702 L54.2385965,31.9117021 L54.2385965,31.9117021 L54.3789474,31.9889362 L74.4701754,43.5951064 L74.6947368,43.7214894 C75.376623,43.9924877 76.1503383,43.8887388 76.7368421,43.4476596 C77.6494561,42.8986157 78.3963753,42.1124776 78.8982456,41.172766 C79.4573548,40.2704539 79.7673048,39.2359301 79.7964912,38.1746809 C79.8502314,37.5421331 79.6422197,36.915228 79.2210526,36.4404255 L78.5614035,36.0612766 L60.3157895,25.5293617 L59.9789474,25.3468085 L59.7473684,25.206383 L58.2877193,24.4340426 L57.9087719,24.216383 L57.9087719,24.216383 L56.4631579,23.3808511 C56.7638942,22.9317513 57.0335311,22.462568 57.2701754,21.9765957 C57.9325549,20.5945055 58.2892021,19.0857316 58.3157895,17.5531915 L58.3157895,16.907234 C58.1614035,12.413617 55.3169591,8.5706383 49.7824561,5.37829787 M43.354386,9.14170213 C47.2421053,11.3791489 49.1859683,14.0870213 49.1859683,17.2653191 C49.1859683,17.68182 49.1511491,18.0975915 49.0807018,18.5080851 C48.6409357,21.1808511 46.7368421,23.4955319 43.3684211,25.4521277 C39.4760234,27.703617 34.7789474,28.8317021 29.277193,28.8363975 C23.7754386,28.8410638 19.097076,27.7176596 15.2421053,25.4661702 C11.8502924,23.5095745 9.93450292,21.2065957 9.49473684,18.557234 C9.418143,18.1545584 9.38054204,17.7454305 9.38238659,17.3355319 C9.38238659,14.1712766 11.3216374,11.456383 15.2,9.19085106 C19.0783626,6.92531915 23.7730994,5.79723404 29.2842105,5.80653796 C34.7719298,5.80653796 39.4619883,6.92765957 43.354386,9.16978723 L43.354386,9.14170213 Z"
                id="Shape"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_1_FILL"
              transform="translate(2.807018, 2.106383)"
              fill="url(#linearGradient-2)"
            >
              <path
                d="M30.1052632,0.28787234 C28.9052632,0.203617021 27.677193,0.154468085 26.4210526,0.154468085 C19.2444444,0.154468085 13.1204678,1.6312766 8.04912281,4.58489362 C2.97777778,7.53851064 0.442105263,11.0819149 0.442105263,15.2151064 C0.443585567,15.7467799 0.488176288,16.2774569 0.575438596,16.8019149 C2.13048292,15.172228 3.92118918,13.78529 5.8877193,12.6874468 C11.5578947,9.41085106 18.4023392,7.77255319 26.4210526,7.77255319 C27.677193,7.77255319 28.9052632,7.81468085 30.1052632,7.89191489 C36.5614035,8.32723404 42.1754386,9.92574468 46.9473684,12.6874468 C48.9298552,13.7794868 50.7313266,15.1721656 52.2877193,16.8159574 C52.3747704,16.2820337 52.4193547,15.7420423 52.4210526,15.2010638 C52.4210526,11.0585106 49.8807018,7.51978723 44.8,4.58489362 C40.2867272,2.06590073 35.2640085,0.597162003 30.1052632,0.28787234 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_2_FILL"
              transform="translate(2.807018, 4.212766)"
              fill="url(#radialGradient-3)"
            >
              <path
                d="M52.4350877,16.0014894 C52.4350877,15.8470213 52.4350877,15.6925532 52.4350877,15.5310638 C52.4350877,11.3885106 49.8947368,7.84978723 44.8140351,4.91489362 C39.7333333,1.98 33.6023392,0.517234043 26.4210526,0.526551094 C19.2444444,0.526551094 13.1204678,2.00340426 8.04912281,4.95702128 C2.97777778,7.9106383 0.442105263,11.4540426 0.442105263,15.587234 C0.442105263,15.7276596 0.442105263,15.8751064 0.442105263,16.0155319 C0.615204678,12.0789362 3.15087719,8.69702128 8.04912281,5.86978723 C13.1157895,2.93021277 19.2397661,1.45340426 26.4210526,1.4393617 C33.6023392,1.42531915 39.7380117,2.88808511 44.8280702,5.82765957 C49.7263158,8.65957447 52.2619883,12.0508511 52.4350877,16.0014894 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_3_FILL"
              transform="translate(54.035088, 30.191489)"
              fill="url(#linearGradient-4)"
            >
              <path
                d="M5.92982456,0.652978723 L5.68421053,0.512553191 C5.52377572,0.487531668 5.3604348,0.487531668 5.2,0.512553191 C4.75707817,0.561073544 4.3304431,0.707357711 3.95087719,0.940851064 C3.5606187,1.16634233 3.20194198,1.44257588 2.88421053,1.76234043 C2.4656238,2.1824218 2.10244451,2.6543341 1.80350877,3.16659574 C1.69824561,3.34914894 1.6,3.53170213 1.50175439,3.71425532 C1.12099735,4.4806942 0.917150485,5.32290958 0.905263158,6.1787234 C0.905263158,6.6912766 0.736842105,6.88085106 0.407017544,6.65617021 C0.61754386,7.21085106 0.589473684,7.42148936 0.329824561,7.29510638 L20.4350877,18.887234 C19.8691,18.4385593 19.5724361,17.7309576 19.6491228,17.0125532 C19.6762483,15.9684313 20.0351203,14.9601041 20.6736842,14.1338298 C21.2849343,13.2357602 22.2348636,12.6249476 23.3052632,12.4417021 C24.3789474,12.2591489 24.9754386,12.006383 25.0877193,11.6834043 L6.31578947,0.863617021 L6.31578947,0.863617021 L5.92982456,0.652978723 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_4_FILL"
              transform="translate(2.807018, 5.617021)"
              fill="url(#radialGradient-5)"
            >
              <path
                d="M52.4491809,15.0395745 C52.4491809,10.8970213 49.9087719,7.35829787 44.8280702,4.42340426 C39.7473684,1.48851064 33.6116959,0.0257446809 26.4210526,0.0350617326 C19.2444444,0.0350617326 13.1204678,1.51191489 8.04912281,4.46553191 C2.97777778,7.41914894 0.442105263,10.9602128 0.442105263,15.0887234 C0.442105263,19.2546809 2.98947368,22.7980851 8.08421053,25.7189362 C13.1789474,28.6397872 19.3076023,30.1002128 26.4701754,30.1002128 C33.651462,30.1002128 39.780117,28.6280851 44.8561404,25.6838298 C49.9321637,22.7395745 52.4631579,19.1914894 52.4491809,15.0395745 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_5_FILL"
              transform="translate(0.000000, 29.489362)"
              fill="url(#linearGradient-6)"
            >
              <path
                d="M52.7508772,7.21787234 L52.6315789,7.1406383 C51.7353236,7.80989856 50.7977918,8.42196339 49.8245614,8.97319149 C44.154386,12.2497872 37.3099415,13.8880851 29.2912281,13.8880851 C21.2725146,13.8880851 14.4210526,12.2497872 8.73684211,8.97319149 C4.31578947,6.46893617 1.61169591,3.53404255 0.624561404,0.168510638 L0.554385965,0.168510638 C1.49005848,3.61829787 4.2128655,6.63744681 8.72280702,9.22595745 C14.3929825,12.5025532 21.2444444,14.1408511 29.277193,14.1408511 C37.3099415,14.1408511 44.154386,12.5025532 49.8105263,9.22595745 C50.8351714,8.62431926 51.8175721,7.95339789 52.7508772,7.21787234 L52.7508772,7.21787234 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_6_FILL"
              transform="translate(0.000000, 17.553191)"
              fill="url(#linearGradient-7)"
            >
              <path
                d="M58.3157895,0 C58.2720705,1.52533109 57.9036379,3.02378227 57.2350877,4.39531915 C56.2634292,6.31185902 54.8808116,7.99010366 53.1859649,9.31021277 L53.1438596,9.31021277 C52.0992371,10.1634267 50.9894085,10.9334424 49.8245614,11.6131915 C44.154386,14.8897872 37.3099415,16.5280851 29.2912281,16.5280851 C21.2725146,16.5280851 14.4210526,14.8897872 8.73684211,11.6131915 C5.05964912,9.52553191 2.56608187,7.1312766 1.25614035,4.43042553 C0.627628655,3.13546317 0.269464184,1.72593356 0.203508772,0.28787234 L0.203508772,9.65425532 C0.41871345,14.0776596 3.25847953,17.8597872 8.72280702,21.0006383 C14.3929825,24.277234 21.2444444,25.9155319 29.277193,25.9155319 C37.3099415,25.9155319 44.154386,24.277234 49.8105263,21.0006383 C50.8323977,20.4101011 51.8146073,19.7533828 52.7508772,19.0346809 L50.645614,17.82 L50.6035088,17.82 L50.5263158,17.7217021 C49.9282621,17.2758671 49.6105987,16.5467222 49.6912281,15.8048936 C49.7192818,14.7390631 50.0292236,13.6997215 50.5894737,12.792766 C51.1049222,11.8666691 51.8490839,11.0882681 52.7508772,10.5319149 C53.2701428,10.1774629 53.9068384,10.0389772 54.5263158,10.1457447 C54.6554247,10.1838687 54.7801053,10.2356504 54.8982456,10.3002128 C55.0238174,10.3712528 55.139441,10.4586068 55.2421053,10.56 L57.8807018,12.083617 C57.8839884,12.0626815 57.8839884,12.041361 57.8807018,12.0204255 C58.127491,11.1775288 58.2689198,10.3072791 58.3017544,9.42957447 C58.2947342,9.36892609 58.2947342,9.30766965 58.3017544,9.24702128 L58.3157895,0 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_7_FILL"
              transform="translate(72.982456, 41.425532)"
              fill="url(#linearGradient-8)"
            >
              <path
                d="M6.23859649,0.519574468 C5.5224557,0.118017261 4.64378397,0.142287973 3.95087719,0.582765957 C2.97874126,1.08063282 2.1754682,1.85501885 1.64210526,2.80851064 C1.05981482,3.69228191 0.734268512,4.72048591 0.701754386,5.77851064 C0.623423643,6.49563341 0.917334401,7.20298399 1.48070175,7.65319149 L1.70526316,7.78659574 C2.3847519,8.06158317 3.15827911,7.9631786 3.74736842,7.52680851 C4.66025452,6.97501752 5.40706729,6.18656539 5.90877193,5.24489362 C6.46880919,4.34299996 6.77883617,3.30821919 6.80701754,2.24680851 C6.8600963,1.61397987 6.64637871,0.987759716 6.21754386,0.519574468 L6.23859649,0.519574468 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_8_FILL"
              transform="translate(49.122807, 27.382979)"
              fill="url(#linearGradient-9)"
            >
              <path
                d="M5.40350877,0.322978723 C4.78403136,0.216211284 4.14733581,0.354696983 3.62807018,0.709148936 C2.72715964,1.2635511 1.98307727,2.03945204 1.46666667,2.96297872 C0.906416565,3.86993424 0.59647483,4.90927589 0.568421053,5.97510638 C0.487791729,6.71693498 0.80545513,7.44607983 1.40350877,7.89191489 L1.46666667,7.92702128 L1.50877193,7.92702128 L3.61403509,9.14170213 L5.07368421,9.98425532 C4.60334708,9.6669891 4.30960241,9.14681049 4.28070175,8.58 C4.25164221,8.40127501 4.23755814,8.22043323 4.23859649,8.0393617 C4.24023369,7.74751314 4.26605313,7.45630284 4.31578947,7.1687234 C4.46661439,6.42465071 4.7443556,5.71211496 5.13684211,5.06234043 C5.5047069,4.4017182 5.97890049,3.8062887 6.54035088,3.3 C6.76204649,3.11935943 6.99658371,2.95509605 7.24210526,2.80851064 C7.69316738,2.53651025 8.18652364,2.34191057 8.70175439,2.23276596 L5.61403509,0.400212766 L5.40350877,0.322978723 Z"
                id="Path"
              ></path>
            </g>
            <g id="Layer0_5_MEMBER_9_FILL" fill="url(#linearGradient-10)">
              <path
                d="M58.3157895,16.9212766 C58.1614035,12.4323404 55.3169591,8.59170213 49.7824561,5.3993617 C44.102924,2.12276596 37.251462,0.484468085 29.2280702,0.484468085 C21.2046784,0.484468085 14.3602339,2.13680851 8.69473684,5.44148936 C3.24912281,8.60106383 0.41871345,12.3785106 0.203508772,16.7738298 L0.203508772,17.8410638 C0.269464184,19.2791251 0.627628655,20.6886547 1.25614035,21.983617 C2.56140351,24.6797872 5.0502924,27.0857447 8.72280702,29.2014894 C14.3929825,32.4780851 21.2444444,34.116383 29.277193,34.116383 C37.3099415,34.116383 44.154386,32.4780851 49.8105263,29.2014894 C50.9794894,28.5291089 52.0940101,27.7661366 53.1438596,26.9195745 L53.1859649,26.9195745 C54.8808116,25.5994654 56.2634292,23.9212207 57.2350877,22.0046809 C57.9114323,20.6160016 58.2800684,19.0975624 58.3157895,17.5531915 L58.3157895,16.9212766 M55.2561468,17.2723404 C55.2544424,17.8133189 55.2098581,18.3533103 55.122807,18.887234 C54.5473684,22.3510638 52.0608187,25.3585106 47.6631579,27.9095745 C42.5824561,30.8585106 36.4538012,32.3212766 29.277193,32.2981488 C22.1005848,32.2744681 15.9719298,30.8117021 10.8912281,27.9095745 C6.47017544,25.3678723 3.96725146,22.3580851 3.38245614,18.8802128 C3.29519383,18.3557548 3.25060311,17.8250778 3.24912281,17.2934043 C3.24912281,13.1508511 5.78479532,9.60744681 10.8561404,6.66319149 C15.9274854,3.71893617 22.051462,2.24212766 29.2280702,2.23276596 C36.4140351,2.23276596 42.5497076,3.69787234 47.6350877,6.62808511 C52.7204678,9.55829787 55.2608187,13.106383 55.2561468,17.2723404 Z"
                id="Shape"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_10_FILL"
              transform="translate(49.122807, 33.702128)"
              fill="url(#linearGradient-11)"
            >
              <path
                d="M1.50877193,1.63595745 L1.46666667,1.63595745 L1.40350877,1.57276596 C0.890101321,1.21363004 0.583736387,0.626773217 0.58245614,0 L0.58245614,4.91489362 L0.687719298,4.86574468 C1.70959067,4.27520749 2.69180033,3.61848913 3.62807018,2.89978723 L1.50877193,1.63595745 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_12_FILL"
              transform="translate(2.807018, 5.617021)"
              fill="url(#linearGradient-12)"
            >
              <path
                d="M49.122807,7.62510638 C47.8296053,6.37754989 46.3814805,5.30149753 44.8140351,4.42340426 C39.7333333,1.47446809 33.6023392,0.0117021277 26.4210526,0.035106383 C19.2397661,0.0585106383 13.1157895,1.53531915 8.04912281,4.46553191 C2.96842105,7.40510638 0.432748538,10.9461702 0.442079463,15.0887234 C0.44528367,15.9473473 0.560887419,16.8018537 0.785964912,17.6304255 C11.3918129,12.8980851 27.5040936,9.56297872 49.122807,7.62510638 Z"
                id="Path"
              ></path>
            </g>
            <g
              id="Layer0_5_MEMBER_13_FILL"
              transform="translate(53.333333, 29.489362)"
              fill="url(#linearGradient-13)"
            >
              <path
                d="M4.95438596,0.393191489 L4.5754386,0.168510638 C4.04984338,0.264840328 3.54588984,0.45511263 3.0877193,0.730212766 C2.84219774,0.876798175 2.60766053,1.04106155 2.38596491,1.22170213 C1.82451452,1.72799083 1.35032094,2.32342033 0.98245614,2.98404255 C0.589969636,3.63381709 0.312228428,4.34635284 0.161403509,5.09042553 C0.111667168,5.37800496 0.0858477292,5.66921527 0.0841570479,5.96106383 C0.0831721732,6.14213536 0.0972562488,6.32297714 0.126315789,6.50170213 C0.155216448,7.06851262 0.448961112,7.58869123 0.919298246,7.90595745 L0.919298246,7.90595745 L1.04561404,7.98319149 C1.30526316,8.10957447 1.64210526,8.29914894 2.04912281,8.54489362 C1.8245614,8.39744681 1.69824561,7.84276596 1.66315789,6.99319149 C1.63633872,6.09747219 1.82654646,5.2085609 2.21754386,4.40234043 C2.31578947,4.21978723 2.41403509,4.03723404 2.51929825,3.85468085 C2.81823398,3.3424192 3.18141327,2.87050691 3.6,2.45042553 C3.91773145,2.13066098 4.27640818,1.85442744 4.66666667,1.62893617 C5.04623258,1.39544282 5.47286764,1.24915865 5.91578947,1.2006383 C6.07622428,1.17561677 6.2395652,1.17561677 6.4,1.2006383 L4.95438596,0.393191489 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  `,
})
export class EmptyStateNoResultsIcon {
  /**
   * Classes to add to the icon
   */
  @Input() iconClass: string;
}