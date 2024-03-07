import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // Importe o Vue Router

const app = createApp(App)
app.use(router) // Use o Vue Router

app.mount('#app')
