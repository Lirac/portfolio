/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        firstColor: '#6e57e0',
        firstColorAlt: '#5a43cb',
        secondColor: '#6e57e0',
        titleColor: '#242329'
      },
    },
  },
  plugins: [],
}
