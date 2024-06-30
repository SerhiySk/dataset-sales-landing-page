import { useColorModeValue } from "@chakra-ui/react";

export const ZeldLogo = ({ ...rest }) => {
  return (
    // <svg viewBox="0 0 148 90" {...rest}>
    //   <path
    //     d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
    //     fill={useColorModeValue('black', 'white')}
    //     fillRule="nonzero"
    //   ></path>
    // </svg>
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 138.0765316579613 60"
    >
      <g
        data-v-423bf9ae=""
        id="19af0084-9ee3-4953-a65b-902982da6281"
        fill={useColorModeValue("black", "white")}
        transform="matrix(5.888125304749934,0,0,5.888125304749934,-3.532873420547901,-2.649656283809101)"
      >
        <path d="M0.60 1.76L5.66 1.76L5.66 2.07L0.60 9.27L0.60 10.51L6.90 10.51L6.90 9.55L1.83 9.55L1.83 9.27L6.90 2.07L6.90 0.81L0.60 0.81ZM10.96 9.72C9.59 9.72 9.13 8.93 9.13 7.43L13.75 7.43L13.80 6.64C13.80 4.34 12.85 3.36 10.99 3.36C9.21 3.36 8.06 4.38 8.06 7.04C8.06 9.42 8.75 10.64 10.84 10.64C11.97 10.64 13.57 10.42 13.57 10.42L13.54 9.59C13.54 9.59 12.01 9.72 10.96 9.72ZM9.11 6.59C9.13 4.90 9.80 4.24 10.99 4.24C12.22 4.24 12.75 4.86 12.75 6.59ZM15.53 10.50L16.58 10.50L16.58 0.45L15.53 0.45ZM24.05 0.45L23.02 0.45L23.02 3.54C22.81 3.50 21.90 3.36 21.29 3.36C19.17 3.36 18.37 4.59 18.37 7.06C18.37 10.08 19.52 10.64 20.89 10.64C21.94 10.64 23.02 10.02 23.02 10.02L23.02 10.50L24.05 10.50ZM21.01 9.70C20.19 9.70 19.45 9.32 19.45 7.06C19.45 5.24 19.88 4.27 21.35 4.27C21.92 4.27 22.79 4.40 23.02 4.44L23.02 9.18C23.02 9.18 22.01 9.70 21.01 9.70Z"></path>
      </g>
    </svg>
  );
};
