import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import "./firebase"
import { MotionPlugin } from "@vueuse/motion"

createApp(App).use(createPinia()).use(MotionPlugin).mount('#app')

