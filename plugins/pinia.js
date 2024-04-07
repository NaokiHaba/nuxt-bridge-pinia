import { createPinia, setActivePinia } from 'pinia'

export default defineNuxtPlugin(nuxtApp => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
  setActivePinia(pinia)

  pinia._p.push(({ store }) => {
    Object.defineProperty(store, '$nuxt', { value: nuxtApp.nuxt2Context })
  })

  if (process.server) {
    nuxtApp.nuxt2Context.pinia = pinia.state.value
  } else if (nuxtApp.nuxtState && nuxtApp.nuxtState.pinia) {
    pinia.state.value = nuxtApp.nuxt2Context.nuxtState.pinia
  }

  return {
    provide: {
      pinia
    }
  }
})
