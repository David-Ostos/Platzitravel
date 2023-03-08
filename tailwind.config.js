/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../index.html',
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('https://i.imgur.com/b6oe9Zw.jpg')",
        'sanFranciscoDesktop': "url('https://i.imgur.com/aPUiS8O.jpg')",
        'yosemite': "url('https://i.imgur.com/yFqQOzM.jpg')",
        'LA': "url('https://i.imgur.com/TDx4a42.jpg')",
        'seattle': "url('https://i.imgur.com/1xbdsUk.jpg')",
        'new_york': "url('https://i.imgur.com/afl0FWi.jpg')",
        'norway': "url('https://i.imgur.com/9uKcXKD.jpg')",
        'sydney': "url('https://i.imgur.com/PDzEgCZ.jpg')",
        'miami': "url('https://i.imgur.com/vGIzXcL.jpg')",
        'switzerland': "url('https://i.imgur.com/jsjrR7g.jpg')",
        'bali': "url('https://i.imgur.com/3Atkgl6.jpg')",
        'chicago': "url('https://i.imgur.com/LiU0BLh.jpg')",
        'europe': "url('https://i.imgur.com/S8PYmhb.jpg')",
        'iceland': "url('https://i.imgur.com/EpOf7dU.jpg')"
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
