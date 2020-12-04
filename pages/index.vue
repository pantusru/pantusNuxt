<template>
  <main>
    <!-- <VueNewsIndex/> Популярные новости -->
    <claider-popular :popular="popular.slice(0, 10)" />
    <Abvantage />
    <!-- Популярные Товары -->
    <ModalImg />
    <ModalBuy />
  </main>
</template>

<script>
import Abvantage from "@/components/home/advantage";
import ModalImg from "@/components/modal/product-img";
import ModalBuy from "@/components/modal/buy-product";
import VueNewsIndex from "@/components/news/index";
import VueProductsIndex from "@/components/products/popular/index";
import ClaiderPopular from "@/components/home/claider-popular";
export default {
  components: {
    ClaiderPopular,
    VueNewsIndex,
    VueProductsIndex,
    ModalImg,
    ModalBuy,
    Abvantage,
  },
  async fetch({ store }) {
    await Promise.all([
      // store.dispatch("News/NewsIndex/_NewsIndex"),
      store.dispatch("Products/popular/_ProductPopularAll"),
    ]);
  },
  head() {
    return {
      title: "Pantus главная",
    };
  },
  computed: {
    popular() {
      return this.$store.getters["Products/popular/GetProductsPopular"];
    },
  },
};
</script>
