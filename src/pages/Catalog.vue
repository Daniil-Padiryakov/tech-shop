<template>

    <div class="mr-3 flex-none">
        <categories-menu/>
    </div>

    <div>
        <filters-menu/>
        <catalog-list/>
    </div>

</template>

<script>
    import CategoriesMenu from "../components/Catalog/CategoriesMenu.vue";
    import CatalogList from '../components/Catalog/CatalogList.vue'
    import FiltersMenu from '../components/Catalog/FiltersMenu.vue'
	import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Catalog",
        components: {
			CategoriesMenu, CatalogList, FiltersMenu
        },
    }
</script>

<style scoped>

</style>