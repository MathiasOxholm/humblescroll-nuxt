export default defineNuxtConfig({
  ssr: true,
  modules: ['../src/module', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  humbleScroll: {
    repeat: true,
    mirror: true,
  }
})
