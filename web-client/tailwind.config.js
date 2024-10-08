
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      maincol: "#ffe505",
      secondary: "#ff3300",
      ...colors,
    },
    extend: {
    },
    screens: {
      xxs: "328px",
      xs: "396px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
}