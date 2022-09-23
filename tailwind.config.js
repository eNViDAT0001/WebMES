/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        '1171px': '1171px'
      },
      spacing: {
        '5px': '5px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '10px': '10px',
        '14px': '14px',
        '17px': '17px',
        '18px': '18px',
        '25px': '25px',
        '27px': '27px',
        '45px': '45px',
        '46px': '46px',
        '47px': '47px',
        '50px': '50px',
        '51px': '51px',
        '55px': '55px',
        '60px': '60px',
        '61px': '61px',
        '69px': '69px',
        '100px': '100px',
        '183px': '183px',
        '200px':'200px',
        '230px': '230px',
        '375px': '375px',
        '487px': '487px',
        '547px': '547px',
        '649px':'649px',
        '921px': '921px',
        '1152px': '1152px',
        '1171px': '1171px',
      },
      colors: {
        'gray-header': '#F6F5FF',//gray
        'gray-input' : '#E7E6EF', //gray
        'gray-text-in-select': "#8A8FB9",//gray
        'gray-text-product-brand': "#7E81A2",//gray
        'gray-text-product-content': '#9295AA',//gray
        'gray-product-detail-information': '#F9F8FE',
        'gray-button-amount-product': '#E7E7EF',
        'gray-text-amount-product': 'BEBFC2',
        'purple-text': '#151875',//purple
        'purple-text-2': '#3F509E',//purple
        'purple-name-product': '#111C85',
        'purple-type-product-detail': '#0D134E',
        'purple-check-product-brand': '#603EFF',
        'yellow-check-rating-item': '#FFCC2E',
        'pink-price-sale': ' #FF2AAA',
        //PRODUCT DETAIL
        'purple-text-name-product-detail': '#0D134E',

      },
      fontFamily:{
      },
    },
  },
  plugins: [],
}
