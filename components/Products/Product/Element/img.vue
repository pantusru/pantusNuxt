<template>
  <b-img class="cursor-pointer" @click="ModalImg(product)" fluid :src="product.ProductCard.ProductCardImage.url"/>
</template>

<script>
import Mixin from "@/mixins/Modal/ProductImg"
export default {
     mixins:[Mixin],
    props:{
        product:{},
    }
}
</script>

<style>

</style>