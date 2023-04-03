/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 30px 0.8rem #2D2039',
      },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        //Primary
        'bright-purple': '#A638F6',
        'Purple': '#2D2039',
        //Neutral
        'dark-purple': '#16111A',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)'
      },
      screens: {
        'lg': '376px',
      },
    },
  },
  plugins: [],
}