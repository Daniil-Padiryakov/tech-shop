import {createStore} from 'vuex'
import categories from './modules/categories'
import products from './modules/products'
import cart from './modules/cart'

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		categories, products, cart
	}
})
