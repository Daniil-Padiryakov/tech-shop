import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from '../pages/Catalog.vue'
import Cart from '../pages/Cart.vue'

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: Catalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router