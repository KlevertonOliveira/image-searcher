module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "accent-light-hover": "#70a1c1",
        "accent-light": "#6096BA",
      },
      screens: {
        xs: "480px",
      },
      aspectRatio: {
        "3/1": "3 / 1",
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
