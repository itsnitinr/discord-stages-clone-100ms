module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#181a1c',
        secondary: '#171716',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
