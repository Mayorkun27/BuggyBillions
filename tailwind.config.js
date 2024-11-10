/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
       "./**/*.{html,js}",  // All HTML and JS files in the root and any subfolders
       "./src/**/*.{html,js}" // All HTML and JS files specifically inside the src folder and its subfolders
     ],
     theme: {
       extend: {
         colors: {
           pryPurple: "#796fab",
           secBlack: "#282828",
           secWhite: "#eff6f8",
           accYellow: "#e5aa2d",
           accPink: "#e487bc",
         },
       },
     },
     plugins: [],
   }   