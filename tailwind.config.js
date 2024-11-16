/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBackground': '#743F00',
        'customFontColor': '#3949AB'
      },
      fontFamily: {
        custom: ['PressStart2P', 'sans-serif'],
        custom2:['FeelingPassionate', 'sans-serif']
      }
    },
  },
  plugins: [],
}