import { prefix } from '@/config'

export const useStore = defineStore('config', {
  state: () => ({
    prefix
  }),
  actions: {
    setPrefix (prefix: string) {
      this.prefix = prefix
    }
  }
})