import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { humbleScrollVuePlugin } from 'humblescroll-vue'
import 'humblescroll-vue/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  if(process.server) {
    return
  }
  
  console.log(useRuntimeConfig())
  const options = useRuntimeConfig().public.humbleScroll

  nuxtApp.hook('app:created', () => {
    nuxtApp.vueApp.use(humbleScrollVuePlugin, options)
  })
})
