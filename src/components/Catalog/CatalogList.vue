<template>
	<div class="catalog-list flex flex-wrap mb-3">
		<my-card :card_item="product"
				 v-for="product in paginationProducts"
				 @addToCart="addToCart">
		</my-card>
	</div>

	<div class="pagination btn-group">
		<button class="btn">Prev</button>

		<button v-for="page in paginationPages"
				class="btn"
				@click="pageClick(page)">{{ page }}
		</button>

		<button class="btn">Next</button>
	</div>
</template>

<script>
import MyCard from "./Card.vue";
import {mapActions, mapGetters} from 'vuex'

export default {
	name: "ProductsList",
	components: {
		MyCard
	},
	data() {
		return {
			productsOnPage: 10,
			pageNumber: 1,
		}
	},
	methods: {
		...mapActions([
			'ADD_TO_CART', 'GET_PRODUCTS_FROM_API',
		]),
		addToCart(item) {
			this.ADD_TO_CART(item)
		},
		pageClick(page) {
			this.pageNumber = page
		},
	},
	computed: {
		...mapGetters([
			'PRODUCTS'
		]),
		paginationPages() {
			return Math.ceil(this.$store.getters.PRODUCTS.length / 10)
		},
		paginationProducts() {
			let from = (this.pageNumber - 1) * this.productsOnPage
			let to = from + this.productsOnPage
			return this.PRODUCTS.slice(from, to)
		},
	},
	mounted() {
		this.GET_PRODUCTS_FROM_API()
	}
}
</script>

<style scoped>

</style>