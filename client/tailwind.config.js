/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./src/**/*.css",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
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
