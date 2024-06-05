import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        '3xl': '0px 4px 15px 0px rgba(0,0,0,0.20)'
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '40%': {
            width: '100%',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
        },
      },
      animation: {
        typing: 'typing 5s steps(19) infinite, blink .8s step-end infinite',
      },
    },

    colors: {
      "red-extra-light": "#E42928",
      "red-light": "#C92223",
      "red-regular": "#B12322",
      white: "#FFFFFF",
      "gray-thin": "#FBFBFB",
      "gray-light": "#F0F0F0",
      "gray-regular": "#9CA8AF",
      "gray-medium": "#8B99A1",
      black: "#384953",
      "black-dark": "#181818",
      yellow: "#FFAD29",
    },
  },
  plugins: [nextui()],
};
export default config;
