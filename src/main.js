import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useStore } from './stores/store'

const app = createApp(App)

app.use(createPinia())
export const store = useStore(createPinia())
app.use(router)



app.mount('#app')
