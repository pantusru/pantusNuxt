<template>
    <b-container>
        <Product :dataset="Product"/>
    </b-container>
</template>

<script>
import Product from "@/components/Products/Product/index"
export default {
    async fetch({store}){
        await Promise.all([
            store.dispatch("Products/_ProductAll"),
            store.dispatch("Products/analogs/_ProductAll"),
            store.dispatch("Cart/CartAll/_CartProduct"),
        ])
    },
    computed: {
        Product() {
            return this.$store.getters["Products/GetProducts"][0]
        },
    },
    components: {
        Product,
    },
}
</script>

