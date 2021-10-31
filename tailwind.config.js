module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "brawler" : ['Brawler', 'serif'],
        "Abril" : ['"Abril Fatface"', 'cursive'],
      }
    },
  },
  variants: {
    extend: {
      boxShadow: ['active'],
    },
  },
  plugins: [],
}
