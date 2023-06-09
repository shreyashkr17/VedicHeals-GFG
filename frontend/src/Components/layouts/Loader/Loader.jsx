import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <>
          <div class="purple">
      <div class="background">
        <div class="logo-container">
          <div class="logoL">
            <svg
              className='logoSvg'
              // style={{width: "0px", height: "0px", position: "absolute"}}
              aria-hidden="true"
              focusable="false"
            >
              <linearGradient id="circle-gradient" x2="1" y2="1">
                <stop offset="0%" class="gradient-stop-1" />
                <stop offset="25%" class="gradient-stop-2" />
              </linearGradient>
            </svg>
            <svg
              class="vincreative-logo"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 65.688 65.687"
              
              xmlSpace="preserve"
            >
              <style type="text/css">
                
              </style>
              <g id="logo-mark">
                <g id="logo-mark-ring">
                  <path
                    class="st0"
                    d="M32.844,65.687C14.734,65.687,0,50.954,0,32.844S14.734,0,32.844,0s32.844,14.734,32.844,32.844    S50.954,65.687,32.844,65.687z M32.844,1.398c-17.339,0-31.446,14.107-31.446,31.446S15.505,64.29,32.844,64.29    S64.29,50.184,64.29,32.844S50.183,1.398,32.844,1.398z"
                  />
                </g>
                <g id="bottom">
                  <path
                    class="st0"
                    d="M32.816,60.365c-1.56,0-3.12-0.594-4.307-1.781l0,0c-1.151-1.15-1.784-2.68-1.784-4.307    s0.634-3.156,1.784-4.307l4.307-4.307l4.307,4.307c1.15,1.15,1.784,2.68,1.784,4.307s-0.634,3.156-1.784,4.307    C35.935,59.772,34.376,60.365,32.816,60.365z M32.816,47.64l-3.318,3.318c-0.886,0.886-1.375,2.065-1.375,3.319    s0.488,2.432,1.375,3.319l0,0c0.886,0.886,2.065,1.375,3.318,1.375c1.253,0,2.432-0.488,3.319-1.375    c0.886-0.886,1.375-2.065,1.375-3.319s-0.488-2.432-1.375-3.319L32.816,47.64z"
                  />
                </g>
                <g id="upper">
                  <g id="upper-middle">
                    <path
                      class="st0"
                      d="M32.816,37.492l-4.307-4.307c-1.15-1.15-1.784-2.68-1.784-4.307s0.634-3.157,1.784-4.307     s2.68-1.784,4.307-1.784s3.156,0.634,4.307,1.784c1.15,1.15,1.784,2.68,1.784,4.307s-0.634,3.157-1.784,4.307L32.816,37.492z      M32.816,24.185c-1.254,0-2.432,0.488-3.318,1.375c-0.886,0.886-1.375,2.065-1.375,3.319s0.488,2.432,1.375,3.318l3.319,3.319     l3.319-3.319c0.886-0.886,1.375-2.065,1.375-3.318s-0.488-2.432-1.375-3.318l0,0C35.248,24.673,34.069,24.185,32.816,24.185z"
                    />
                  </g>
                  <g id="upper-right">
                    <path
                      class="st0"
                      d="M47.699,34.99c-0.525,0-1.059-0.069-1.59-0.212l-5.88-1.591l1.592-5.879     c0.878-3.242,4.229-5.166,7.471-4.288c1.571,0.425,2.881,1.436,3.691,2.847s1.022,3.053,0.597,4.624     C52.846,33.201,50.382,34.99,47.699,34.99z M41.945,32.202l4.53,1.226c2.498,0.676,5.08-0.806,5.756-3.304     c0.327-1.21,0.164-2.475-0.46-3.562s-1.634-1.866-2.844-2.194c-2.498-0.676-5.08,0.806-5.757,3.304L41.945,32.202z"
                    />
                  </g>
                  <g id="upper-left">
                    <path
                      class="st0"
                      d="M17.986,34.99c-2.683,0-5.147-1.789-5.881-4.5l0,0c-0.878-3.242,1.046-6.593,4.288-7.471     c1.571-0.425,3.213-0.213,4.624,0.597c1.411,0.81,2.422,2.121,2.847,3.691l1.591,5.879l-5.879,1.591     C19.046,34.921,18.512,34.99,17.986,34.99z M13.455,30.124c0.676,2.498,3.258,3.98,5.756,3.304l4.53-1.226l-1.226-4.53     c-0.328-1.21-1.107-2.22-2.194-2.844s-2.352-0.787-3.562-0.46C14.261,25.044,12.779,27.626,13.455,30.124L13.455,30.124z"
                    />
                  </g>
                </g>
                <g id="middle">
                  <path
                    class="st0"
                    d="M46.299,41.777c0,3.293-2.68,5.975-5.975,5.975c-1.536,0-2.94-0.585-4-1.544    c-0.046-0.042-0.092-0.084-0.138-0.13l-0.318-0.318l-3.978-3.978l-0.515-0.515l-2.566-2.566c-0.05-0.054-0.1-0.106-0.152-0.158    c-0.052-0.052-0.106-0.104-0.16-0.154c-0.815-0.739-1.893-1.19-3.075-1.19c-2.524,0-4.577,2.055-4.577,4.577    c0,2.524,2.053,4.577,4.577,4.577c1.14,0,2.183-0.419,2.986-1.112l1.993-1.993l0.989,0.989l-1.498,1.498l-0.513,0.513    l-0.012,0.012c-1.054,0.929-2.434,1.492-3.944,1.492c-3.295,0-5.975-2.68-5.975-5.975c0-3.293,2.68-5.975,5.975-5.975    c1.536,0,2.94,0.585,4,1.544c0.046,0.042,0.092,0.084,0.138,0.13l4.308,4.308l0.503,0.503l2.484,2.486l0.082,0.08    c0.05,0.054,0.1,0.106,0.152,0.158s0.106,0.104,0.16,0.154c0.815,0.739,1.893,1.19,3.075,1.19c2.524,0,4.577-2.055,4.577-4.577    c0-2.524-2.053-4.577-4.577-4.577c-1.14,0-2.183,0.419-2.986,1.112l-1.851,1.851l-0.989-0.989l1.881-1.881    c1.054-0.929,2.434-1.492,3.944-1.492C43.619,35.802,46.299,38.482,46.299,41.777z"
                  />
                </g>
                <g id="cap">
                  <path
                    id="cap-left"
                    class="st0"
                    d="M31.218,20.724c-4.894,0-8.875-3.981-8.875-8.875V11.15h0.699c4.894,0,8.875,3.981,8.875,8.875    v0.699C31.917,20.724,31.218,20.724,31.218,20.724z M23.777,12.584c0.347,3.538,3.169,6.36,6.706,6.706    C30.137,15.753,27.315,12.931,23.777,12.584z"
                  />
                  <path
                    id="cap-right"
                    class="st0"
                    d="M36.492,20.788h-2.678V18.11c0-5.015,4.08-9.096,9.096-9.096h2.678v2.678    C45.588,16.707,41.508,20.788,36.492,20.788z M35.013,19.589h1.48c4.355,0,7.897-3.543,7.897-7.898v-1.48h-1.48    c-4.355,0-7.897,3.543-7.897,7.898V19.589z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Loader