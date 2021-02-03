<template>
  <b-row class="mt-3">
    <template v-for="data in Cart">
      <template v-for="(offer, indexOffer) in data.productOffer">
        <b-col :key="offer.id" class="mb-3" cols="11" sm="6">
          <BlogCart :dataset-product="data" :index="indexOffer" />
        </b-col>
      </template>
    </template>
  </b-row>
</template>

<script>
import BlogCart from "@/components/cart/blog/cart-blog-get";
export default {
  name: "CartRowGet",
  components: {
    BlogCart,
  },
  computed: {
    Cart() {
      return this.$store.getters["Cart/CartAll/GetCartProduct"];
    },
  },
};
</script>

<style></style>
