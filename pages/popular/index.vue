<template>
  <b-container>
    <ModalImg />
    <modal-buy-product />
    <popular-products-index :popular="popular" />
  </b-container>
</template>

<script>
import ModalImg from "@/components/modal/product-img";
import ProductRow from "@/components/func/product-blogs-get";
import ModalBuyProduct from "@/components/modal/buy-product";
import PopularProductsIndex from "@/components/products/popular/index";
export default {
  components: {
    PopularProductsIndex,
    ModalBuyProduct,
    ProductRow,
    ModalImg,
  },
  async fetch({ store }) {
    await store.dispatch("Products/popular/_ProductPopularAll");
  },
  computed: {
    popular() {
      return this.$store.getters["Products/popular/GetProductsPopular"];
    },
  },
};
</script>

<style></style>
