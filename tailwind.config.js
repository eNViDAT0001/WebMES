/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1171px': '1171px'
      },
      spacing: {
        '10px': '10px',
        '14px': '14px',
        '25px': '25px',
        '47px': '47px',
        '55px': '55px',
        '200px':'200px',
        '375px': '375px',
      },
      colors: {
        'gray-header': '#F6F5FF',//gray
        'gray-input' : '#E7E6EF', //gray
        'purple-text': '#151875',//purple
        'purple-text-2': '#3F509E'//purple
      },
      fontFamily:{
      },
    },
  },
  plugins: [],
}
