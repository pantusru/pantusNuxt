<template>
    <div>
    <slot></slot>
    <ModalImg :dataset="dataset"/>
    <ModalBuy :ProductCard="ProductCard" :productOffer="productOffer"  />
    </div>
</template>

<script>
import ProductModal from "@/mixins/GetModal/product_all"
import ModalImg from  "@/components/Modal/ProductImg"
import ModalBuy from  "@/components/Modal/buyProduct"
export default {
    mixins:[ProductModal],
    components: {
        ModalImg,
        ModalBuy,
    }
}
</script>

<style>

</style>