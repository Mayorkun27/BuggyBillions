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
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        xl: '-5px 5px 2px #000000af',
        none: 'none',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addUtilities, theme, e }) {
      const textShadow = theme('textShadow');
      const utilities = Object.entries(textShadow).map(([key, value]) => ({
        [`.${e(`text-shadow-${key}`)}`]: {
          textShadow: value,
        },
      }));

      addUtilities(utilities);
    },
  ],
}