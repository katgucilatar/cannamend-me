/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./src/**/*.css"
  ],
  theme: {
    colors: {
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
