import { defineStore } from "pinia"

export const useUserStore = defineStore(
  "user",
  {
    state: () => ({
      user: null
    }),
    actions: {
      async fetchUserByID(id) {
        const res = await this.$nuxtAxios.$get(`/users/${id}`)
        this.$patch({
          user: res
        })
      }
    }
  })
