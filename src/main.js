import './assets/main.css'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useStore } from './stores/store'

// 全局組件 {svgIcon}
import globalComponents from './components/index'

const app = createApp(App)

app.use(createPinia())
export const store = useStore(createPinia())
app.use(router)
app.use(globalComponents)



app.mount('#app')
