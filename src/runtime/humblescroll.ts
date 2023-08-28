import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { humbleScrollVuePlugin } from 'humblescroll-vue'
import 'humblescroll-vue/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  if(process.server) {
    return
  }
  
  console.log(useRuntimeConfig())
  const options = useRuntimeConfig().public.humbleScroll

  console.log('options', options)

  nuxtApp.hook('app:created', () => {
    nuxtApp.vueApp.use(humbleScrollVuePlugin, options)
  })
})
