<template>
    <nuxt-link :to=" '/news/categories/' + dataset.id" 
    class="d-flex justify-content-between text-decoration-none shadow px-3 py-4 mb-3">
        <div class="text-danger">{{dataset.name}}</div>
        <div class="text-secondary">{{dataset.amount_news}}</div>
    </nuxt-link>
</template>

<script>
export default {
    props:{
        dataset:{},
    }
}
</script>

<style>
.shadow{
    box-shadow: 5px 5px 9px 1px #ccc
}
</style>