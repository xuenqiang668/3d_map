import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './style.css'
import 'virtual:uno.css'
import 'amfe-flexible'
import Tres from '@tresjs/core'


const app = createApp(App)


app.use(store)
app.use(router)
app.use(Tres)
app.mount('#app')