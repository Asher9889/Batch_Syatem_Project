/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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

