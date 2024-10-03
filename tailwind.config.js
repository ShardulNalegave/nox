/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"Space Grotesk"', 'monospace'],
        'body': ['"Afacad Flux"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
