<template>
    <div class="cart-item bg-base-100 p-4 rounded-xl mb-3">

        <img :src="'../../public/' + cart_item_data.img"
			 class="cart-item__img">

        <div class="cart-item__info text-center mx-5">

            <p>{{cart_item_data.title}}</p>
            <p>${{cart_item_data.price}}</p>

        </div>

        <div class="cart-item__quantity font-medium">{{cart_item_data.quantity}}</div>
        <button @click="deleteFromCart"
				class="btn btn-accent">Delete
		</button>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        emits: ['deleteFromCart'],
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .cart-item {
        width: 100%;
        max-width: 800px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .cart-item__img {
        width: 100px;
    }

    .cart-item__info {
        width: 200px;
    }
</style>