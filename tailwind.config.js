/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'boral': ['"Borel"', 'cursive'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        translateToEnd:{
          '0%':{
            transform :'scaleX(-1)'
          },
          '50%':{
            transform: 'translateX(88em) '
          },
          '100%':{
            transform: ' scaleX(-1)'
          },
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'translateToEnd': 'translateToEnd 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
