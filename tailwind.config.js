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
          customRed: '#ff0000',
          customBlue: '#0000ff',
          customGreen: '#00ff00',
        },
      },
    },
}

