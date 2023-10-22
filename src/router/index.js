import { createRouter, createWebHistory } from 'vue-router';
import NewsVue from '../views/NewsVue.vue';
import DataVue from '../views/DataVue.vue'
import DataView from '../views/DataGeneral.vue'
import BeginnerView from '../views/BeginnerGuide.vue'
import AboutVue from '../views/AboutVue.vue'
import RessourcesVue from '../views/RessourcesVue.vue'
import Error404 from '../views/ErrorVue.vue'
const routes = [{
        path: '/data/:cryptoname',
        name: 'Data',
        component: DataVue,
        props: true
    },
    {
        path: '/news/:page?',
        name: 'News',
        component: NewsVue,
        props: true
    },
    {
        path: '/news/specific/:cryptoname/:page?',
        name: 'CryptonameNews',
        component: NewsVue,
        props: route => ({ cryptoname: route.params.cryptoname, page: 1 })
    },
    {
        path: '/data',
        name: 'data',
        component: DataView
    },
    {
        path: '/home',
        name: 'Home',
        component: BeginnerView,

    },
    {
        path: '/',
        name: 'AboutUs',
        component: AboutVue
    },
    {
        path: '/ressources',
        name: 'Ressources',
        component: RessourcesVue
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        component: Error404
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;