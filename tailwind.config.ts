import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#3FB4AA",
          dark: "#2D8F87",
          deep: "#1B4A4A",
        },
        "off-white": "#FAFAF8",
        "dark-text": "#1A2A2E",
        "body-text": "#4A5A5E",
        "light-gray": "#E0E0E0",
      },
      fontFamily: {
        jp: ['"Noto Sans JP"', '"Hiragino Sans"', 'sans-serif'],
        en: ['Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
