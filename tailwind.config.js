/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ORANGE_PRIMARY: "#f0a71d",
      ORANGE_SECONDARY: "#fbaf21",
      BLACK_PRIMARY: "#444",
      BLACK_SECONDARY: "#1A202C",
      BLACK_GRAY: "#666"
    },
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans"]
      },
    },
  },
  plugins: [],
}
