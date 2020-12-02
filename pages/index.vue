<template>
  <main>
    <!-- <VueNewsIndex/> Популярные новости -->
    <!-- <Abvantage/> -->
    <VueProductsIndex :popular="popular.slice(0, 10)" />
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
export default {
  head() {
    return {
      title: "Pantus главная",
    };
  },
  components: {
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
  computed: {
    popular() {
      return this.$store.getters["Products/popular/GetProductsPopular"];
    },
  },
};
</script>
