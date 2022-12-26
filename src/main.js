import { createApp } from 'vue';
import BaseCard from './components/UI/MainProducts.vue';
import ShoppingCard from './components/layout/ShopingCard.vue';
import App from './App.vue';
import router from './router';
import vuetify from './vuetify';

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.component('base-card', BaseCard);
app.component('shopping-card', ShoppingCard);

app.mount('#app');
