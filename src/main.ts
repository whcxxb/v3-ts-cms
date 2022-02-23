import { createApp } from 'vue'
import registerApp from './global'
import XBRequest from './service'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(registerApp)
app.use(store)
app.use(router)
app.mount('#app')

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// XBRequest.get<DataType>({
//   url: '/home/multidata'
// }).then((res) => {
//   console.log(res.data)
//   console.log(res.returnCode)
//   console.log(res.success)
// })
