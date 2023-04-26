import '@/assets/styles/main.scss';

import { createApp } from 'vue';

import App from './App.vue';
import router from './routes/router';

import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.use(router);
app.use(VueApexCharts);

app.mount('#app');
