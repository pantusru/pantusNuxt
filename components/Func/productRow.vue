<template>
    <div>
        <BlogRow 
            v-for="data in array"
            :key="data.id"
            @dataImg="Getdataset" 
            @dataProduct="GetdataProduct" 
            :Product="data"
        >
        </BlogRow>
    <ModalImg :dataset="dataset"/>
    <ModalBuy :ProductCard="ProductCard" :productOffer="productOffer"  />
    </div>
</template>

<script>
import BlogRow from "@/components/Products/Product/blog-row"
import ProductModal from "@/mixins/GetModal/product_all"
import ModalImg from  "@/components/Modal/ProductImg"
import ModalBuy from  "@/components/Modal/buyProduct"
export default {
    props:{
        array:{},
    },
    mixins:[ProductModal],
    components: {
        ModalImg,
        ModalBuy,
        BlogRow
    }
}
</script>

<style>

</style>