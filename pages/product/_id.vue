<template>
  <b-container>
    <Product :dataset="ProductData[0]" v-if="ProductData.length !== 0" />
  </b-container>
</template>

<script>
import Product from "@/components/products/product/index";
export default {
  async fetch({ store, params, getters }) {
    const ProductAll = store.getters["Products/GetProducts"]; // Все подгруженные товары
    if (ProductAll.length !== 0) {
      console.log(params.id);
      const datasetCheck = ProductAll.filter(
        data => data.ProductCard.id == params.id
      );
      if (datasetCheck !== undefined) {
        store.commit("Products/SetProduct", datasetCheck);
        return;
      }
    }
    await store.dispatch("Products/_ProductId", params.id);
  },
  computed: {
    ProductData() {
      return this.$store.getters["Products/GetProduct"];
    }
  },
  components: {
    Product
  }
};
</script>
