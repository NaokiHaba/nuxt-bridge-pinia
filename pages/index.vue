<script>

import { defineNuxtComponent } from '#imports'
import { mapState } from "pinia"

export default defineNuxtComponent({

  async fetch({ $pinia }) {
    await $pinia.fetchUserByID(1)
  },

  computed: {
    ...mapState(useUserStore, {
      user: (state) => {
        return state.user
      }
    })
  }

})

</script>

<template>
  <div>
    {{ user }}
  </div>
</template>
