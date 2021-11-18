<template>
    <div class="my-header navbar max-w-screen-2xl mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">

        <div class="flex-none px-2 mx-2">
              <span class="text-lg font-bold">
                Tech-Shop
              </span>
        </div>

        <div class="flex-1 px-2 mx-2">
            <div class="items-stretch hidden lg:flex">
                <a @click="$router.push({ name: 'catalog' })"
				   class="btn btn-ghost btn-sm rounded-btn">
                    Catalog
                </a>
            </div>
        </div>

        <div class="flex-none">
            <button @click="$router.push({ name: 'cart' })"
					class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="10" cy="20.5" r="1"/>
                    <circle cx="18" cy="20.5" r="1"/>
                    <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/>
                </svg>
            </button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>

</style>