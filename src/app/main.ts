import { createApp } from 'vue';
import '../style.scss';
import App from './App.vue';
import router from '@/router';
import { store, rootStoreKey }  from '@/store';

const app = createApp(App);

app.use(router);
app.use(store, rootStoreKey);

app.mount('#app');
