/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#202020',
        'blue': '#2A56F3'
      },
      spacing: {
        'lg': '8rem',
      }
    },
  },
  plugins: [],
}
