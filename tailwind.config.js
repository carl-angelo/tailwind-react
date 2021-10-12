module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#0ac39b',
      secondary: '#008c78',
      tertiary: '#8cfedc'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
