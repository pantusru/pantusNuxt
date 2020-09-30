<template>
    <b-container>
        <Product :dataset="popular" />
    </b-container>
</template>

<script>
import Product from "@/components/Products/Product/index"
export default {
    async fetch({store}){
        await store.dispatch("Products/_ProductAll");
    },
    computed: {
        popular() {
            return this.$store.getters["Products/GetProducts"][0]
        }
    },
    components: {
        Product,
    },
}
</script>

