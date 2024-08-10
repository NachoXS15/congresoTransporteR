/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'prim': '#627791',
        'sec': '#2f455c',
        'third': '#3d5a7a',
        'fourth': '#1dcdfe',
      }
    },
  },
  plugins: [],
}

