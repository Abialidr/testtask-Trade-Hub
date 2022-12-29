/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        lineHeight: {
          '4.5': '1.125rem',
        },
        padding: {
          '7.5': '30px',
        }
      },
      colors: {
        'lightgray':"#CED6E0",
        'text-gray':'#B7C4D7',
        'white':'#ffffff',
        'dark-gray':'#24292E',
        'dark-orange':'#FF681A',
        'defult-gray':"#24292ED9",
        'desable-text':'#24292E99',
        'link':'#0097EE'
      },
      fontFamily: {
        'Montserrat':'Montserrat'
      }
    },
    plugins: [],
  }