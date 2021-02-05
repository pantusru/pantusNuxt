<template>
  <section class="section-popular">
    <h2 class="title-blog">
      <nuxt-link to="/popular">Популярные товары</nuxt-link>
    </h2>
    <VueSlickCarousel
      v-if="checkPopular"
      class="blog-popular"
      v-bind="settings"
    >
      <productPopular
        v-for="(data, index) in product"
        :key="index"
        :arr="data"
      />
    </VueSlickCarousel>
    <div class="link-more-center">
      <button class="link-more">ПОСМОТРЕТЬ ВСЕ ПОПУЛЯРНЫЕ ТОВАРЫ</button>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import productPopular from "../microComponents/productPopular.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { RepositoryFactory } from "./../../axios/RepositoryFactory";
const ProductRepository = RepositoryFactory.get("product");

export default {
  components: {
    productPopular,
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
      product: 0,
      checkPopular: false,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      await ProductRepository.popular().then(response => {
        this.$store.commit("setProductPopular", response.data.data);
        this.product = this.$store.getters.getProductPopular;
        this.checkPopular = true;
      });
    },
  },
};
</script>

<style lang="sass">
.title-blog
    color: #2e414d
    font-size: 24px
    margin-bottom: 30px
.blog-popular
  .slick-track
    display: flex !important
    margin: 0 -20px
  .slick-slide
    height: inherit !important
    [data-v-e4caeaf8]
      height: 100%
      margin: 0 20px
.link-more-center
  margin-top: 30px
  text-align: center
  .link-more
    color: #666
    font-size: 14px
</style>
