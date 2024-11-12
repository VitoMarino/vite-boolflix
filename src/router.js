import {createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppFilm from './pages/AppFilm.vue';
import AppSeries from './pages/AppSeries.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/film',
            name: 'film',
            component: AppFilm
        },
        {
            path: '/series',
            name: 'series',
            component: AppSeries
        }
    ]
});

export {router};