/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,handlebars}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "halloween"],
  },
  plugins: [require("daisyui")],
};
