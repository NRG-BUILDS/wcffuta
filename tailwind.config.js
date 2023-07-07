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
        blueBgLight: 'hsl(237, 23%, 32%)',
      },
      borderRadius: {
        bigCorner: '999px',
      }
    },
  },
  plugins: [],
}


