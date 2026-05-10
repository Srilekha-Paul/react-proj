/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        gold: {
          50: "#fef7e8",
          100: "#fdeebd",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};