module.exports = {
  purge: ["./*.html", "./src/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        akshar: ["Akshar", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        fira: ["Fira sans", "sans-serfif"],
        sanspro: ["source sans pro", "sans-serif"],
      },
      animation: {
        reveal: "reveal 1s linear forwards ",
      },
      keyframes: {
        reveal: {
          from: { top: "-900px" },
          to: { top: "0px" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
