<template>
    <b-container>
        <Product :dataset="Product"/>
        <h4 class="mb-3 mt-3">Аналоги и заменители</h4>
        <Table :array="analogs" :CheckAnalogs="true"></Table>
    </b-container>
</template>

<script>
import Table from "@/components/Table/product"
import Product from "@/components/Products/Product/index"
export default {
    async fetch({store}){
        await store.dispatch("Products/_ProductAll");
        await store.dispatch("Products/analogs/_ProductAll");
    },
    computed: {
        Product() {
            return this.$store.getters["Products/GetProducts"][0]
        },
        analogs() {
            return this.$store.getters["Products/analogs/GetProducts"]
        },
    },
    components: {
        Product,
        Table
    },
}
</script>

