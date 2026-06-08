import { createApp } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import App from './App.vue';
import router from './router';
import store from './store';

import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

import '@fontsource/commissioner/600.css';
import '@fontsource/commissioner/700.css';

const app = createApp(App);
app.use(VueApexCharts);

createApp(App).use(store).use(router).mount('#app')

