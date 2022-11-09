/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        taOrange : '#ffa941',
        taRed : '#f4476f',
        taGreen : '#08d5a2',
        taPlatinum : '#f7f7fe',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      }
    },
  },
  plugins: [],
}