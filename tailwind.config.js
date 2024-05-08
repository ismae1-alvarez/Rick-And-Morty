/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        'rick-and-morty-title' : "url('/img/title.png')"
      }
    },
  },
  plugins: [],
}

