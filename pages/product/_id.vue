<template>
  <b-container>
    <Product :dataset="Product" />
  </b-container>
</template>

<script>
import Product from "@/components/products/product/index";
export default {
  async fetch({ store }) {
    await Promise.all([
      store.dispatch("Products/_ProductId"),
      store.dispatch("Products/analogs/_ProductAll")
    ]);
  },
  computed: {
    Product() {
      return this.$store.getters["Products/GetProduct"][0];
    }
  },
  components: {
    Product
  }
};
</script>
