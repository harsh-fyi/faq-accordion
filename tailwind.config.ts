import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-pink": "#f9f0ff",
        "greyish-purple": "#8c6991",
        "dark-purple": "#2f1533"
      }
    },
  },
  plugins: [],
};
export default config;
