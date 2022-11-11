/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        taOrange : '#ffa941',
        taRed : '#f4476f',
        taGreen : '#08d5a2',
        taPlatinum : '#f7f7fe',
        taDark: '#121212',
        taMidDark: '#1e1e1e',
      },
      animation: {
        'spin-slow': 'spin 2s linear 1s',
        'pulse-color-p': 'colorized-p 1s cubic-bezier(0.4, 0, 0.6, 1)',
        'pulse-color-a': 'colorized-a 1s cubic-bezier(0.4, 0, 0.6, 1)',
        'pulse-color-r': 'colorized-r 1s cubic-bezier(0.4, 0, 0.6, 1)',
      }
    },
  },
  plugins: [],
}