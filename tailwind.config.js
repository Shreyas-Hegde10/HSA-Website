/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          800: '#4A1D1D', // Dark maroon color
        },
        gold: {
          700: '#D4AF37', // Dark gold color
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

