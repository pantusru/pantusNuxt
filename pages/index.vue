<template>
  <main>
    <ModalImg />
    <ModalBuy />
    <b-container>
      <SectionIndex />
      <SectionReklama />
      <SectionIndexGVue />
      <SectionDealersVue />
      <SectionContentVue />
      <Abvantage />
    </b-container>
    <claider-popular :popular="popular.slice(0, 10)" />
    <!--    <VueNewsIndex class="mb-5 mt-4" />-->
    <b-container>
      <SectionAboutVue />
    </b-container>
  </main>
</template>

<script>
import Abvantage from "@/components/home/advantage";
import ModalImg from "@/components/modal/product-img";
import ModalBuy from "@/components/modal/buy-product";
import VueNewsIndex from "@/components/news/index";
import ClaiderPopular from "@/components/home/claider-popular";

import SectionIndex from "../components/home/SectionIndex";
import SectionReklama from "../components/home/SectionReklama";
import SectionIndexGVue from "../components/home/SectionIndexG.vue";
import SectionDealersVue from "../components/home/SectionDealers.vue";
import SectionContentVue from "../components/home/SectionContent.vue";
import SectionAboutVue from "../components/home/SectionAbout.vue";
export default {
  components: {
    ClaiderPopular,
    VueNewsIndex,
    ModalImg,
    ModalBuy,
    Abvantage,
    SectionIndex,
    SectionReklama,
    SectionIndexGVue,
    SectionDealersVue,
    SectionContentVue,
    SectionAboutVue,
  },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch("News/NewsIndex/_NewsIndex"),
      store.dispatch("Products/popular/_ProductPopularAll"),
      store.dispatch("Brand/brand-carousel/actionBrandCarouser"),
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
  // async created() {
  //   await this.$store.dispatch("Products/popular/_ProductPopularAll");
  // },
};
</script>
