/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontBig: ['Nanum Myeongjo'],
        primary: ['Monomaniac One']
      },
      colors: {
        deepRed: '#9d0416',
        brightRed: '#ff0000',

        heroRed: "hsl(353, 100%, 62%)",
        blueBgDark: 'hsl(237, 17%, 21%)',
        blueBgLight: 'hsl(237, 23%, 32%)',
        heroRedLight: 'hsl(13, 100%, 72%)'
      },
      borderRadius: {
        bigCorner: '100px',
      }
    },
  },
  plugins: [],
}


