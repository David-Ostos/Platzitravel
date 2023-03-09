/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('https://i.imgur.com/8rdEA7W.jpg')",
        'sanFranciscoDesktop': "url('https://i.imgur.com/6QBRerV.jpg')",
        'yosemite': "url('https://i.imgur.com/TelXD63.jpg')",
        'LA': "url('https://i.imgur.com/X1WT8kG.jpg')",
        'seattle': "url('https://i.imgur.com/A668ntf.jpg')",
        'new_york': "url('https://i.imgur.com/J3Cd2qh.jpg')",
        'norway': "url('https://i.imgur.com/nKJkNrl.jpg' )",
        'sydney': "url('https://i.imgur.com/7uJWIA1.jpg' )",
        'miami': "url('https://i.imgur.com/WhkQuaq.jpg')",
        'switzerland': "url('https://i.imgur.com/oH6teiS.jpg')",
        'bali': "url('https://i.imgur.com/21rIhog.jpg')",
        'chicago': "url('https://i.imgur.com/M1HhCtr.jpg')",
        'europe': "url('https://i.imgur.com/O2hs2A0.jpg')",
        'iceland': "url('https://i.imgur.com/ilYjUzn.jpg')"
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor: theme =>({
        'primary': '#CC2D4A',
       'secundary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      fontFamily:{
        Montserrat:['Montserrat','sans-serif']
      },
      boxShadow: {
        '1': '0 2px 7px rgba(0,0,0,0.25)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
