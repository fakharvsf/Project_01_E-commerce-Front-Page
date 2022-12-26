import { createRouter, createWebHistory } from 'vue-router';

import Catagories from './Pages/Catagories/Catagories.vue';
import HomePage from './Pages/HomePage/HomePage.vue';
import NotFound from './Pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/catagories', component: Catagories },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
