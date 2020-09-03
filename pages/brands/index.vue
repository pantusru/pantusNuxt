<template>
    <b-container>
        Брэнд
    </b-container>
</template>

<script>
export default {
    async fetch({store, getters, commit}){
        store.dispatch("Brand/BrandAll/_Brands");
    }
}
</script>

<style>

</style>