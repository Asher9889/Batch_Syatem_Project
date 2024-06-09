/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "ssm": "375px",
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        clash: ['Clash Display', "sans-serif"]
      },
      backgroundImage:{
      red : "url('/src/assets/Ellipse 1.png')",
      }
    },
  },
  plugins: [],
}

