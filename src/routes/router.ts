import * as vR from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import MapPage from '@/pages/MapPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes: Array<vR.RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage,
    name: 'Home'
  },
  {
    path: '/map/neighborhoods',
    component: MapPage,
    name: 'Map'
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundPage,
    name: 'NotFound'
  }
]

const router = vR.createRouter({
    history: vR.createWebHistory(),
    routes,
});

export default router;
