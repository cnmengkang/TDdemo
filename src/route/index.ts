import { createWebHistory, type RouteRecordRaw, createRouter } from 'vue-router'
import layout from '../layout/index.vue'
import home from '../views/home.vue';
import about from '../views/about/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: home
            },
            {
                path: '/about',
                name: 'about',
                component: about
            },
        ]
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
