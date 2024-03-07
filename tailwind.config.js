/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': "#F5F7FA",
        'neutralDGray': "#4D4D4D",
        'brandprimary': "#4CAF4F",
        'neutralGray': "#717171",
        'gray900': "#18191f",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

