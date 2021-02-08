<template>
  <div>
    <ModalImg />
    <ModalBuy />
    <claider-popular :popular="popular.slice(0, 10)" />
  </div>
</template>

<script>
import ModalImg from "@/components/modal/product-img";
import ModalBuy from "@/components/modal/buy-product";
// import "https://code.jquery.com/jquery-git.min.js";
// import test from "@/components/test/test";
// import "@/plugins/query/jquery.fias.min";
// import "@/plugins/query/1";
import ClaiderPopular from "@/components/home/claider-popular";
export default {
  name: "TestView",
  components: {
    ClaiderPopular,
    ModalImg,
    ModalBuy,
    // test,
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

<style lang="sass"></style>
