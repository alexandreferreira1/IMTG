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
  plugins: [],
};
export default config;
