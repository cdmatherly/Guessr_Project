/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%, 100%": { transform: "scale(105%)" },
          "50%": { transform: "scale(95%)" }
        }
      },
      animation: {
        expand: "expand 100ms ease-in-out"
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2400px'
    }
  },
  plugins: [],
}