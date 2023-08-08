/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#51c87d',
        secondary: '#f4fcf6',
        tertiary: '#1b442b',
      }
    },
  },
  plugins: [],
}

