<template>
  <div class="text-center">
    <b-img
      class="cursor-pointer w-75"
      @click="ModalImg(product)"
      fluid
      :src="product.ProductCard.ProductCardImage.url"
    />
  </div>
</template>

<script>
import Mixin from "@/mixins/modal/product-img";
export default {
  mixins: [Mixin],
  props: {
    product: {}
  }
};
</script>
