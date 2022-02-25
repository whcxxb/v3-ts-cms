import { createApp } from 'vue'
import registerApp from './global'
import 'normalize.css'
import './assets/css/index.less'
import setupStroe from '@/utils/setupStroe'
import App from './App.vue'
import router from './router'
import store from './store'
setupStroe()
const app = createApp(App)
app.use(registerApp)
app.use(store)
app.use(router)
app.mount('#app')
