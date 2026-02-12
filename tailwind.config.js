/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors (基於 LinkTrove 主專案)
        primary: {
          DEFAULT: '#ff507a',
          light: '#ff8da7',
          dark: '#e6004d',
        },
        // Accent color
        accent: '#6272a4',
        // Neutral colors (亮色主題)
        background: '#fafafa',
        panel: '#ffffff',
        text: {
          DEFAULT: '#1a1a1a',
          muted: '#666666',
        },
        border: '#e5e5e5',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'], // 預設
      },
    },
  },
  plugins: [],
}
