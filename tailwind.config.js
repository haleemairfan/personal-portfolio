/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#2B192E',
        'highlight': '#CE8CA5',
        'design-elements': '#50006C'
      },

      fontFamily: {
        custom: ['Albert-Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}