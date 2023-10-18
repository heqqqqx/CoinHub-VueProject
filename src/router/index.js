import { createRouter, createWebHistory } from 'vue-router';
import NewsVue from '../views/NewsVue.vue';
import DataVue from '../views/DataVue.vue'
import DataView from '../views/DataGeneral.vue'
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
    

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;