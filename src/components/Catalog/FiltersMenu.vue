<template>
    <ul class="filters-menu menu items-stretch px-3 mb-3 shadow-lg bg-base-100 horizontal rounded-box">
<!--        <li @click="SET_CURRENT_FILTER(filter)"-->
<!--            :class="{'bordered': CURRENT_FILTER === filter}"-->
<!--            v-for="filter in FILTERS">-->
<!--            <a>{{filter}}</a>-->
<!--        </li>-->
    </ul>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: "TopMenu",
        methods: {
            ...mapActions([
                'SET_CURRENT_FILTER',
            ]),
        },
        computed: mapGetters([]),
    }
</script>

<style scoped>

</style>