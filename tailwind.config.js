/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'olive': {
        50: '#e3e0d5',
        100: '#dcd9cb',
        300: '#d2cfbd',
        500: '#aaa380',
        600: '#978f65',
        700: '#8d855e',
        800: '#7f7855',

      }
    },
    extend: {},
  },
  plugins: [],
}

