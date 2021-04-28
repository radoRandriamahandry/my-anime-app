module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#49c5b6",
          light: "#c0ebe6",
        },
        secondary: {
          "100": "#f0f1f4",
          "200": "#d2d6df",
          "300": "#b5bbca",
          "400": "#97a0b4",
        },
        background: "f4f7f6",
      },
      gridTemplateColumns: {
        "fit-200": "repeat(auto-fit, minmax(200px, 1fr))",
      },
      gridTemplateRows: {
        "3/1": "3fr 1fr",
        "5/3": "5fr 3fr",
      },
    },
  },
  variants: {
    extend: {
      textAlign: ["even", "odd"],
      transform: ["group-hover"],
      scale: ["group-hover"],
      saturate: ["group-hover"],
    },
  },
  plugins: [],
};
