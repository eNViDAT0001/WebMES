/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1171px': '1171px'
      },
      spacing: {
        '5px': '5px',
        '11px': '11px',
        '10px': '10px',
        '14px': '14px',
        '25px': '25px',
        '27px': '27px',
        '47px': '47px',
        '55px': '55px',
        '60px': '60px',
        '100px': '100px',
        '183px': '183px',
        '200px':'200px',
        '375px': '375px',
        '1171px': '1171px',
      },
      colors: {
        'gray-header': '#F6F5FF',//gray
        'gray-input' : '#E7E6EF', //gray
        'gray-text-in-select': "#8A8FB9",//gray
        'purple-text': '#151875',//purple
        'purple-text-2': '#3F509E'//purple
      },
      fontFamily:{
      },
    },
  },
  plugins: [],
}
