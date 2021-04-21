module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#49c5b6",
        secondary: {
          "100": "#f0f1f4",
          "200": "#d2d6df",
          "300": "#b5bbca",
          "400": "#97a0b4",
        },
        background: "f4f7f6",
      },
    },
  },
  variants: {
    extend: {
      textAlign: ["even", "odd"],
    },
  },
  plugins: [],
};
