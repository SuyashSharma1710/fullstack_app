const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        protest: ['"Protest Guerrilla"', 'cursive'], // Use quotes for multi-word font names
      },
    },
  },
  plugins: [
  ],
});

