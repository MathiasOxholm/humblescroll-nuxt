/** @type {import('tailwindcss').Config} */
import { humbleScrollTailwindPlugin } from 'humblescroll-vue'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [
    humbleScrollTailwindPlugin
  ],
}