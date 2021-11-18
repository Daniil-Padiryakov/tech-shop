<template>
	<div class="app flex flex-col container max-w-screen-2xl mx-auto rounded-box">

		<my-header></my-header>

		<div class="page flex">
			<router-view></router-view>
		</div>

	</div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";

export default {
	components: {
		MyHeader,
	}
}

</script>

<style>
</style>