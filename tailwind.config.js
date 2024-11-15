/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customBackground': '#743F00'
      },
      fontFamily: {
        custom: ['PressStart2P', 'sans-serif']
      }
    },
  },
  plugins: [],
}