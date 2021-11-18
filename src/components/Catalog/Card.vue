<template>
	<div class="card flex p-5 max-w-xs mb-3 mr-3 card bordered text-center bg-base-100">

		<div class="img mb-2">
			<img :src="'../../public/' + card_item.img"
				 class="mx-auto">
		</div>

		<div class="mt-auto">

			<div class="card__body mb-3">
				<h2 class="font-medium">{{ card_item.title }}</h2>
			</div>

			<span class="block font-medium text-xl">${{ card_item.price }}</span>
			<button @click="addToCart(card_item)"
					class="btn btn-accent mt-4">Add to Card
			</button>
		</div>

	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	name: "MyCard",
	props: {
		card_item: {
			type: Object,
			default: () => {},
		}
	},
	emits: ['addToCart'],
	methods: {
		addToCart(item) {
			this.$emit('addToCart', item)
		}
	},
}
</script>

<style scoped>

.card {
	width: 250px;
}

.card__body {
	max-height: 120px;
}

img {
	width: 175px;
}
</style>