<template>
    <b-container>
        <h2 class="mb-4 mt-4">Популярные товары</h2>
        <b-row>
            <b-col cols=4                         
                 v-for="data in popular"
                :key="data.id"
            >
            <PopularProduct @dataImg="Getdataset" @dataProduct="GetdataProduct" :datasetProduct="data"/>
            </b-col>
            <ModalImg :dataset="dataset"/>
            <ModalBuy :ProductCard="ProductCard" :productOffer="productOffer"  />
        </b-row>
    </b-container>
</template>

<script>
import ModalImg from  "@/components/Modal/ProductImg"
import ModalBuy from  "@/components/Modal/buyProduct"
import PopularProduct from "@/components/Products/Popular/blog"
import ProductModal from "@/mixins/GetModal/product_all"
export default {
    mixins:[ProductModal],
    computed: {
        popular() {
            return this.$store.getters["Products/popular/GetProductPopual"]
        }
    },
    components: {
        PopularProduct,
        ModalImg,
        ModalBuy,

    },
}
</script>

<style>

</style>