<template>
  <main>
    <!-- <VueNewsIndex/> Популярные новости -->
    <VueProductsIndex />
    <!-- Популярные Товары -->
    <ModalImg />
    <ModalBuy />
  </main>
</template>

<script>
import ModalImg from "@/components/Modal/ProductImg";
import ModalBuy from "@/components/Modal/buyProduct";
import VueNewsIndex from "@/components/News/index";
import VueProductsIndex from "@/components/Products/Popular/index";
export default {
  components: {
    VueNewsIndex,
    VueProductsIndex,
    ModalImg,
    ModalBuy
  },
  async fetch({ store }) {
    await Promise.all([
      // store.dispatch("News/NewsIndex/_NewsIndex"),
      store.dispatch("Products/_ProductAll"),
    ]);
  },
};
</script>

