<template>
  <div class="container">
    <ModalImg />
    <modal-buy-product />
    <h1>Акционные товары</h1>
    <ProductBlogsGet :array="getProductSale" />
  </div>
</template>

<script>
import ModalImg from "~/components/modal/product-img";
import ModalBuyProduct from "~/components/modal/buy-product";
export default {
  name: "PageSale",
  components: { ModalBuyProduct, ModalImg },
  async fetch({ store }) {
    await store.dispatch("sale/RequestProductSale");
  },
  computed: {
    getProductSale() {
      return this.$store.getters["sale/getProductSale"];
    },
  },
};
</script>

<!--<style scoped></style>-->
