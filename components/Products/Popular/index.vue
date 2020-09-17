<template>
    <b-container>
        <b-row>
            <b-col cols=4                         
                 v-for="data in popular"
                :key="data.id"
                >
                <PopularProduct :datasetProduct="data"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ModalBuy from  "@/components/Modal/buyProduct"
import ProductImg from  "@/components/Modal/ProductImg"
import MixitImg from "@/mixins/Modal/ProductImg"
import PopularProduct from "@/components/Products/Popular/blog"
export default {
    mixins:[MixitImg],
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