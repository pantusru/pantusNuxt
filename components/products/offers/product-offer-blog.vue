<template>
  <div class="product-offer-blog">
    <div class="row-gutters product-offer-row">
      <div class="product-offer-blog-price-text">Цена</div>
      <product-offer-quantity
        component="div"
        :link-offers="offer"
        :link-product="product"
      />
    </div>
    <div class="row-gutters product-offer-row">
      <div class="product-offer-price">{{ offer.prices }}</div>
      <!-- button -->
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {
  TypeOfferProduct,
  TypeProductVuex,
} from '~/interface/products/products.interface'
import ProductOfferQuantity from '~/components/products/element/offer/product-offer-quantity.vue'
export default {
  name: 'ProductOfferBlog',
  components: { ProductOfferQuantity },
  props: {
    product: {
      type: Object as () => PropType<TypeProductVuex>,
    },
    offer: {
      type: Object as () => PropType<TypeOfferProduct>,
    },
  },
}
</script>
<style lang="sass">
@import "assets/sass/products/product-offer"
</style>
