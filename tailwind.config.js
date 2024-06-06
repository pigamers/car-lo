/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'one': '#FFFAE6',
      'two': '#FF9F66',
      'three': '#FF5F00',
      'four': '#002379',
      "five": '#313638',
      'six': '#f7fff7',
      'seven': '#ffe66d',
    },
    extend: {
      fontFamily: {
        graduate: ["Graduate", "serif"],
      }
    }
  },
  plugins: [],
}

