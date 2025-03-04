import './assets/main.css'; // Import the CSS file

import { createApp } from 'vue';
import App from './App.vue';

// Create the app instance
const app = createApp(App);

// Global error handling
app.config.errorHandler = (err) => {
    console.error('Vue error:', err);
};

// Mount the app
app.mount('#app');
