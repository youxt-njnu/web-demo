import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vuetify, i18n } from '../theme/ui/vuetify'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify)

app.mount('#app')
