import type { App } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

export const install = (app: App) => {
  app.use(pinia)
}

export default pinia
