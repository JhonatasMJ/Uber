/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        uber: "url('/src/assets/uber.png')",
        banner: "url('/src/assets/fundo-uber.png')",
      },
      fontFamily: {
        web: ["Titillium Web", "sans-serif"],
      },
    },
  },
  plugins: [],
};
