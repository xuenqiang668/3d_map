import { defineStore } from 'pinia'

export const useToken = defineStore({
  id: 'token', // id必填，且需要唯一
  state: () => {
    return {
      token: '',
      username: '',
    }
  },
  getters: {
    getToken(): string {
      return this.token
    },
    getUsername(): string {
      return this.username
    },
  },
  actions: {
    updateToken(token: string) {
      this.token = token
    },
    updateUsername(username: string) {
      this.username = username
    },
    clearUserStore() {
      this.token = ''
      this.username = ''
    },
  },
  persist: true,
  // persist: {
  //   storage: sessionStorage,
  // },
})