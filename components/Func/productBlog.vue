<template>
    <b-row>
        <b-col cols="4"
            v-for="data in array"
            :key="data.id">
                <BlogProduct 
                :datasetProduct="data"                
                >
                </BlogProduct>
        </b-col>
    <ModalImg :dataset="DataImg.data"/>
        <ModalBuy 
        :ProductCard="DataBuy.ProductCard" 
        :productOffer="DataBuy.productOffer" 
        :kovloProps="DataBuy.CartKolvo" 
    />
    </b-row>
</template>

<script>
import BlogProduct from "@/components/Products/Popular/blog"
import ProductModal from "@/mixins/GetModal/product_all"
import ModalImg from  "@/components/Modal/ProductImg"
import ModalBuy from  "@/components/Modal/buyProduct"
export default {
    props:{
        // componetsName:{},
        array:{},
    },
    mixins:[ProductModal],
    components: {
        ModalImg,
        ModalBuy,
        BlogProduct
    },
}
</script>

<style>

</style>