/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans all your React files
  ],
  theme: {
    extend: {
      colors: {
        hhkBlue: '#002B5B',   // Added your custom theme colors here
        hhkYellow: '#FFD700',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}