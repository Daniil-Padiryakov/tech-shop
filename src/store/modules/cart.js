export default {
	state: {
		cart: [],
	},
	mutations: {
		SET_TO_CART(state, product) {
			const addProduct = () => {
				product.quantity = 1;
				state.cart.push(product);
			}
			if (state.cart.length) {
				let isProductExists = false
				state.cart.map((item) => {
					if (item.id == product.id) {
						isProductExists = true
						item.quantity++
					}
				})
				if (!isProductExists) {
					addProduct()
				}
			} else {
				addProduct()
			}
		},
		REMOVE_FROM_CART:(state, index) => state.cart.splice(index, 1)
	},
	actions: {
		ADD_TO_CART:({commit}, item) => commit('SET_TO_CART', item),
		DELETE_FROM_CART:({commit}, index) => commit('REMOVE_FROM_CART', index)
	},
	getters: {
		CART:(state) => state.cart,
		CART_TOTAL(state) {
			let result = []

			for (let cartItem of state.cart) {
				result.push(Number(cartItem.price) * cartItem.quantity)
			}

			return result = result.reduce((summ, elem) => summ + elem, 0)
		}
	},
}