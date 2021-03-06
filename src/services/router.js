import Vue from 'vue'
import Router from 'vue-router'

import HomeApp from '@/components/Home'
import SobreApp from '../components/Sobre'
import TableCrud from '@/components/TableCrud'
import ClientDetail from '@/components/ClientDetail'
import EquipamentosApp from '@/components/Equipamentos'

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
    },
    {
        name: 'cliente',
        path: '/cliente/:idCliente',
        component: ClientDetail
    },
    {
        name: 'equipamentos',
        path: '/equipamentos/:idCliente',
        component: EquipamentosApp
    }
]

const router = new Router({ mode: 'history', routes })

export default router