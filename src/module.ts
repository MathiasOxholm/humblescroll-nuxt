import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  repeat: boolean
  mirror: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'humble-scroll',
    configKey: 'humbleScroll'
  },
  defaults: {
    repeat: false,
    mirror: false,
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./runtime/humblescroll'))

    nuxt.options.runtimeConfig.public.humbleScroll = defu(nuxt.options.runtimeConfig.public.humbleScroll, {
      repeat: options.repeat,
      mirror: options.mirror,
    })

    addComponent({
      name: 'HumbleScroll',
      export: 'HumbleScroll',
      filePath: 'humblescroll-vue'
    })
  }
})
