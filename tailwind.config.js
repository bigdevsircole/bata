/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        leather: {
            50: '#faf8f5',
            100: '#f0ebe3',
            200: '#e0d5c5',
            300: '#cbb59f',
            400: '#b59478',
            500: '#a67c5b',
            600: '#8b6549',
            700: '#70513d',
            800: '#5c4336',
            900: '#4d3830',
        },
        cream: '#FDFBF7',
      }
    },
  },
  plugins: [],
}
