/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#151515',
        // 'blue': '#2A56F3'
        'blue': '#2563eb'
      },
      spacing: {
        'lg': '8rem',
      }
    },
  },
  plugins: [],
}
