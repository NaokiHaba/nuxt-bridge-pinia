<script>

import { defineNuxtComponent } from '#imports'
import { useUserStore } from "@/stores/UserStore"

export default defineNuxtComponent({

  async fetch() {
    const userStore = useUserStore()
    await userStore.fetchUserByID(1)
  },

  computed: {
    user() {
      const userStore = useUserStore()
      return userStore.user
    }
  }

})

</script>

<template>
  <div>
    SSR Pinia Example
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
  </div>
</template>
