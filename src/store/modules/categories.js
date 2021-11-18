export default {
	state: {
		categories: [
			{
				id: 0, title: 'Phones and gadgets', subCategories: [
					{id: 2, title: 'Apple',},
					{id: 3, title: 'Samsung',},
					{id: 4, title: 'Xiaomi',},
				]
			},
			{
				id: 1, title: 'Computers and peripherals', subCategories: [
					{id: 5, title: 'CPU',},
					{id: 6, title: 'GPU',},
					{id: 7, title: 'RAM',},
				]
			},
		],
		currentCategory: null,
	},
	mutations: {
		CHANGE_CURRENT_CATEGORY:(state, categoryId) => state.currentCategory = categoryId,
	},
	actions: {},
	getters: {
		ALL_CATEGORIES:(state) => state.categories,
		CURRENT_CATEGORY:(state) => state.currentCategory,
	},
}