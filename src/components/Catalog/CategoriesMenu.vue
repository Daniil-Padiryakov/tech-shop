<template>
    <ul class="categories-menu menu p-4 shadow-lg bg-base-100 rounded-box">
        <li v-for="item in ALL_CATEGORIES">

            <a>
                {{item.title}}
            </a>

            <ul v-for="subCategory in item.subCategories"
				class="menu">
                <li>
                    <a @click="CHANGE_CURRENT_CATEGORY(subCategory.id)"
					   :class="{'active': CURRENT_CATEGORY === subCategory.id}">
                        {{subCategory.title}}
                    </a>
                </li>
            </ul>

        </li>
    </ul>
</template>

<script>
    import {mapMutations, mapGetters} from "vuex";

    export default {
        name: "SideMenu",
        methods: {
            ...mapMutations(['CHANGE_CURRENT_CATEGORY']),
        },
        computed: {
			...mapGetters(["ALL_CATEGORIES", 'CURRENT_CATEGORY']),
        }
    }

</script>

<style scoped>

</style>