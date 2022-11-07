/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:"Poppins",
      },
      colors:{
        'cyan':'#06b5d4',
        'sky':"#b8f4ff",
        'dark':"#000b2e"
      }
    },
  },
  plugins: [],
}