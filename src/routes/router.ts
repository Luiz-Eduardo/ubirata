import * as vR from 'vue-router';
import DashboardVue from '@pages/Dashboard.vue';
import PageNotFound from '@pages/NotFoundPage.vue';

const routes: Array<vR.RouteRecordRaw> = [
    {
        path: '/',
        component:  DashboardVue,
        name: 'home'
    },
    {
        path: '/demo',
        component:  () => import("@pages/DemoPage.vue"), //Lazy Loading to defer loading only when required
        name: 'home.demo' //Use defined. Keep dot notation to have elegant design
    },
    {
        path: '/login',
        component:  () => import("@pages/AuthPage.vue"),
        name: 'home.auth'
    },
    {
        path: '/notfound',
        component: PageNotFound,
        name: 'home.missing'
    }
]

const router = vR.createRouter({
    history: vR.createWebHistory(),
    routes,
});
export default router;