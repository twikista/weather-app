module.exports = {
  purge: ["./*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        akshar: ["Akshar", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        fira: ["Fira sans", "sans-serfif"],
        sanspro: ["source sans pro", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
