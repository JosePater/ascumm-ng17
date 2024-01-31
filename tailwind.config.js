/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        principal: ['"Be Vietnam Pro"', "sans-serif"],
      },

      colors: {
        // Mis colores: _color
        _orange: "hsl(12, 88%, 59%)",
        _darkBlue: "hsl(228, 39%, 23%)",
        _gray: "hsl(135, 2%, 33%)",
        _blackBlue: "hsl(233, 12%, 13%)",
        _beige: "hsl(13, 100%, 96%)",
        _lightBeige: "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        // Imágenes para el menú responsive
        "close-menu": "url('./assets/images/icon-close.svg')",
        "open-menu": "url('./assets/images/icon-hamburger.svg')",
      },
    },
  },
  plugins: [],
};
