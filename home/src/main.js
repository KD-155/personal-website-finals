import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue'

const app = createApp(App);

// Global error handling
app.config.errorHandler = (err) => {
    console.error('Vue error:', err);
};

app.component('Home', Home)

app.mount('#app');