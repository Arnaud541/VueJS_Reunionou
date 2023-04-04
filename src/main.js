import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../public/assets/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import apiClient from './api';

const token = localStorage.getItem('authToken');
if (token) {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


app.mount('#app')
