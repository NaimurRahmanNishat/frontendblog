/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#181A2A',
        'secondery': '#4B6BFB',
        'accent': '#E8E8EA',
      },
    },
  },
  plugins: [],
}

