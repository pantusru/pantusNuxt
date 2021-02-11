<template>
  <div class="text-center">
    <b-img
      class="cursor-pointer w-75"
      fluid
      :src="product.ProductCard.ProductCardImage.url"
      :alt="product.ProductCard.name"
      @click="ModalImg(product)"
    />
  </div>
</template>

<script>
import Mixin from "@/mixins/modal/product-img";
export default {
  mixins: [Mixin],
  props: {
    product: {},
  },
};
</script>
