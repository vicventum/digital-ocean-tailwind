import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import sal from './plugins/sal'

const app = createApp(App)
app.use(sal)

app.use(router)

app.mount('#app')
