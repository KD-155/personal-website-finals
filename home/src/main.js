import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue'
import comments from './comments.js'

// Create the app instance
const app = createApp(App);

// Global error handling
app.config.errorHandler = (err) => {
    console.error('Vue error:', err);
};

app.component('Home', Home)
app.component('comments', comments)

// Mount the app
app.mount('#app');
