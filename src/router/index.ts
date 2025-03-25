import { createMemoryHistory, type RouteRecordRaw, createRouter } from 'vue-router'

import Layout from '../layout/index.vue';
import home from '../views/home.vue';
import about from '../views/about.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'index',
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
    history: createMemoryHistory(),
    routes,
})
export default router
