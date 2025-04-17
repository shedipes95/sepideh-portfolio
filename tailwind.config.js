/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["docs/index.html", "src/js/**/*.js"],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A",
          "primary-dark": "#1A237E",
          "primary-light": "#C5CAE9",
          accent: "#D946EF",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  