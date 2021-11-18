import axios from "axios";

export default {
	state: {
		products: [],
		filters: [
			'A-Z',
			'Price'
		],
	},
	mutations: {
		SET_PRODUCTS_FROM_API_TO_STATE:(state, products) => state.products = products
	},
	actions: {
		GET_PRODUCTS_FROM_API({commit}) {
			return axios('https://my-json-server.typicode.com/Daniil-Padiryakov/tech-shop-json-server/products', {
				method: 'GET'
			}).then((products) => {
				commit('SET_PRODUCTS_FROM_API_TO_STATE', products.data)
			})
		},
	},
	getters: {
		CATEGORY_PRODUCTS(state, { CURRENT_CATEGORY }) {
			if (CURRENT_CATEGORY === null) {
				return state.products
			} else {
				return state.products.filter(product => product.category_id === CURRENT_CATEGORY)
			}
		},
		PRODUCTS:(state, getters) => getters.CATEGORY_PRODUCTS.sort((a, b) => b.price - a.price),
	},
}