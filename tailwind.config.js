/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      colors: {
        'gray6': '#666666',
        'gray9': '#999999',
        'graybg': '#F5F5F8',
        'grayswitch': '#DCDCDC',
        'grayswitchlarge': '#EEEEEE',
        'buttonblue': '#316FEE',
        'selectedblue': '#5A8CF1'
      }
    },
  },
  plugins: [],
}
