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
      offWhite: '#FFFCF4',
      darkGrey: '#636059',
      
    }},
  },
  plugins: [],
};
