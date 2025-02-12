import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App-copy.vue'
import "./firebase"
createApp(App).use(createPinia()).mount('#app')
// createApp(App).mount('#app')
// app.use(createPinia())
