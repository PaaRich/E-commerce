/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#23f802e0',
        secondary:'#FF7F50',
      }
    },
  },
  plugins: [],
};
