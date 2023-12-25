/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*"],
  theme: {
    extend: {
      colors: {
        primary: "#314584",
        secondary: "#ff3946",
        tertiary: "#8b9195",
      },
      fontFamily: {
        work: ["Work Sans"],
      },
      fontSize: {
        navSize: "24px",
        heroSize: "74px",
        pSize: "18px",
        titleOne: "45px",
      },
    },
  },

  plugins: [],
};
