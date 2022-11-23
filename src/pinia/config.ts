import { prefix, statusBarColor } from '@/config'

export const useStore = defineStore('config', {
  state: () => ({
    prefix,
    statusBarColor
  }),
  actions: {
    setPrefix (prefix: string) {
      this.prefix = prefix
    },
    setStatusBarColor (color: string) {
      this.statusBarColor = color
    }
  }
})