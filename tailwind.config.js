/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center : true,
      },
      colors: {
        pryPurple : "#796fab",
        secBlack : "#282828",
        secWhite : "#eff6f8",
        accYellow : "#e5aa2d",
        accPink : "#e487bc",
      },
      boxShadow: {
        'custom-shadow': '10px 5px 20px #00000032, -10px -5px 30px #00000025',
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}