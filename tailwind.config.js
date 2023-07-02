/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-theme-light': '#F3EEEE',
        'tx-theme-light': '#1F2023',
        'color-theme-light': '#1B8CF3',
        'button-theme-light': '#1B8CF3',
        'bg-theme-dark': '#1F2023',
        'tx-theme-dark': '#FFFFFF',
        'color-theme-dark': '#37A85E',
        'button-theme-dark': '#37A85E',
      }
    },
  },
  plugins: [],
}