<template>
    <div class="cart flex flex-col">

        <h2 class="font-medium text-3xl mb-3">Cart</h2>
        <cart-item
                v-for="(item, index) in CART"
                :cart_item_data="item"
                @deleteFromCart="deleteFromCart(index)"
        />

		<div class="shadow stats">
			<div class="stat">
				<div class="stat-title">Total Cart Cost</div>
				<div class="stat-value">${{CART_TOTAL}}</div>
			</div>
		</div>

    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import CartItem from "../components/CartItem.vue";

    export default {
        name: "Cart",
        components: {
            CartItem
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        },
        computed: {
			...mapGetters(['CART', 'CART_TOTAL']),
		},
    }
</script>

<style scoped>
.cart {
    width: 100%;
    align-items: center;
}
</style>