<template>
  <main>
    <!-- <VueNewsIndex/> Популярные новости -->
    <b-container>
      <SectionIndex />
      <SectionReklama />
      <SectionIndexGVue />
      <SectionContentVue />
      <Abvantage />
    </b-container>
    <claider-popular :popular="popular.slice(0, 10)" />
    <b-container>
      <SectionAboutVue />
    </b-container>
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

import SectionIndex from "../components/home/SectionIndex";
import SectionReklama from "../components/home/SectionReklama";
import SectionIndexGVue from "../components/home/SectionIndexG.vue";
// import SectionDealersVue from "../components/home/SectionDealers.vue";
import SectionContentVue from "../components/home/SectionContent.vue";
// import SectionAdvantageVue from "../components/home/SectionAdvantage.vue";
// import SectionNews from "../components/home/SectionNews.vue";
import SectionAboutVue from "../components/home/SectionAbout.vue";
export default {
  components: {
    ClaiderPopular,
    // VueNewsIndex,
    // VueProductsIndex,
    ModalImg,
    ModalBuy,
    Abvantage,

    SectionIndex,
    SectionReklama,
    SectionIndexGVue,
    // SectionDealersVue,
    SectionContentVue,
    // SectionAdvantageVue,
    // SectionNews,
    SectionAboutVue,
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
