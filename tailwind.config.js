/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6DA350", // Primary color
          800: "#2F6D3D", // Primary-800 shade
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
