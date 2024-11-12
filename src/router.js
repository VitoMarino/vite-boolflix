import {createRouter, createWebHistory} from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppFilm from './pages/AppFilm.vue';
import AppSeries from './pages/AppSeries.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: '/film',
            name: 'Film',
            component: AppFilm
        },
        {
            path: '/series',
            name: 'Serie Tv',
            component: AppSeries
        }
    ]
});

export {router};