/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      "light-gray": "#303640",
      seconds: "rgba(6, 252, 63, 1)",
      minutes: "rgba(252, 230, 0, 1)",
      hours: "rgba(253, 41, 112, 1)",
    },
  },
  },
  plugins: [],
}

