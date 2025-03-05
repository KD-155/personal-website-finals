import './assets/main.css'; // Import the CSS file

import { createApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue'

// Create the app instance
const app = createApp(App);

// Global error handling
app.config.errorHandler = (err) => {
    console.error('Vue error:', err);
};

app.component('Home', Home)

// Mount the app
app.mount('#app');
