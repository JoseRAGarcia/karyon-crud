import Vue from 'vue'
import Router from 'vue-router'

import HomeApp from '@/components/Home'
import SobreApp from '../components/Sobre'
import TableCrud from '@/components/TableCrud'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeApp
    },
    {
        name: 'sobre',
        path: '/sobre',
        component: SobreApp
    },
    {
        name: 'gerenciamento',
        path: '/gerenciamento',
        component: TableCrud
    }
]

const router = new Router({ mode: 'history', routes })

export default router