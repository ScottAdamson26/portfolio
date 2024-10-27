// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your files for classes
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {},
    fontFamily: {
      rubik: ['rubik', 'sans-serif'],
      
    },
    extend: {

    colors:{
      customBlue: '#3d55d9',
      offWhite: '#FFF6ED',
      darkGrey: '#636059',
      beige: '#D6D2C1',
      
    }},
  },
  plugins: [],
};
