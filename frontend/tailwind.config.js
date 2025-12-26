/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#6ec1e4',
          medium: '#2162a0',
          dark: '#2c599d',
          accent: '#f19e38',
        },
      },
    },
  },
  plugins: [],
}
