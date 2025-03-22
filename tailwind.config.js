/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [require("daisyui")],
    theme: {
      extend: {
        colors: {
          accent: '#FECE3E',
        },
      },
    },
}

