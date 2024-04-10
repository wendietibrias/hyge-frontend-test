import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
         primary:"#111111",
         secondary:"#1A68FE",
         "secondary-alt":"#ECECEC",
         title:"#FFFFFF",
         "title-alt":"#EDF3FF",
         description:"#C5C5C5"
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1300px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1150px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '900px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max':'520px'}
    }
  },
  plugins: [],
};
export default config;
