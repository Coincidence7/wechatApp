import App from './App.vue'
// #ifndef VUE3
import Vue from 'vue'
import store from './store'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import store from './store/store.js'

export function createApp() {
	const app = createSSRApp(App)
	app.use(store)	
	return {
		app
	}
}
// #endif
