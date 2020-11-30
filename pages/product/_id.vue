<template>
  <b-container>
    <Product :dataset="ProductData[0]" v-if="ProductData.length !== 0" />
    <h1 v-else class="error">Товар не найден</h1>
  </b-container>
</template>

<script>
import Product from "@/components/products/product/index";
export default {
  data() {
    return {
      title: ""
    };
  },
  created() {
    if (this.ProductData.length === 0) {
      this.title = "Pantus товар не найден";
    } else {
      this.title = "Pantus товар " + this.ProductData[0].ProductCard.name;
    }
  },
  head() {
    return {
      title: this.title
    };
  },
  async fetch({ store, params, getters }) {
    const ProductAll = store.getters["Products/GetProducts"]; // Все подгруженные товары
    if (ProductAll.length !== 0) {
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
