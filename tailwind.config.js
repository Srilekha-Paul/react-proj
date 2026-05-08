/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef7e8',
          100: '#fdeebd',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309'
        }
      }
    },
  },
  plugins: [],
}