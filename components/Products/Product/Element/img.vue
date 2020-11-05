<template>
  <div class="text-center">
    <b-img class="cursor-pointer w-75" @click="ModalImg(product)" fluid :src="product.ProductCard.ProductCardImage.url"/>
  </div>
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
