module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "accent-light-hover": "#70a1c1",
        "accent-light": "#6096BA",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
