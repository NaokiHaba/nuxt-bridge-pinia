import { createPinia, setActivePinia } from 'pinia'

export default defineNuxtPlugin(nuxtApp => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
  setActivePinia(pinia)

  pinia._p.push(({ store }) => {
    Object.defineProperty(store, '$nuxtAxios', { value: nuxtApp.nuxt2Context.$axios })
  })

  if (process.server) {
    nuxtApp.nuxt2Context.beforeNuxtRender((ctx) => {
      ctx.nuxtState.pinia = pinia.state.value
    })
  } else if (nuxtApp.nuxt2Context.nuxtState && nuxtApp.nuxt2Context.nuxtState.pinia) {
    pinia.state.value = nuxtApp.nuxt2Context.nuxtState.pinia
  }

  return {
    provide: {
      pinia
    }
  }
})
