const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      ...screens,
    },

    extend: {
      colors: {
        "accent-light-hover": "#70A1C1",
        "accent-light": "#6096BA",
        "focus-light": "#FAC748",
        "focus-dark": "#B2ABF2",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
