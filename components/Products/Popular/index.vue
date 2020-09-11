<template>
    <b-container>
        <b-row>
            <b-col cols=4>
                <PopularProduct 
                        v-for="data in popular"
                        :key="data.id"
                        :dataset="data"
                    />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import PopularProduct from "@/components/Products/Popular/blog"
export default {
    computed: {
        popular() {
            return this.$store.getters["Products/popular/GetProductPopual"]
        }
    },
    components: {
        PopularProduct,
    },
}
</script>

<style>

</style>