export default defineNuxtConfig({
  ssr: false,
  modules: ['../src/module', '@nuxtjs/tailwindcss'],
  myModule: {},
  devtools: { enabled: true },
  humbleScroll: {
    repeat: true,
    mirror: true,
  }
})
