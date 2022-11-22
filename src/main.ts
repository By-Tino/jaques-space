import App from "./App.vue"
import * as pinia from '@/pinia'
import { createSSRApp } from "vue"
import '@/assets/styles/tino-design-ui/index.scss'

export function createApp() {
	const app = createSSRApp(App);
	app.use(pinia)
	return {
		app,
	};
}
