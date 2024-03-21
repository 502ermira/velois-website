/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1A001D",
        primary1: "#190030",
        primary2: '#15001A',
        secondary: "#aaa6c3",
        tertiary: "#3d004f",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      
      },
    },
  },
  plugins: [
    require("tailwindcss-gradients"),
  ],
};