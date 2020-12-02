<template>
  <b-container>
    <h2 class="mb-4 mt-4">Популярные товары</h2>
    <VueSlickCarousel
      class="blog-popular-claider"
      v-bind="settings"
      v-if="popular.length !== 0"
    >
      <!--      <template #prevArrow> <div>вперед</div> </template>-->
      <b-col class="mb-3" v-for="data in popular" :key="data.id">
        <BlogProduct :datasetProduct="data" />
      </b-col>
    </VueSlickCarousel>
  </b-container>
</template>

<script>
import BlogProduct from "@/components/products/popular/blog";
export default {
  name: "claider-popular",
  components: {
    BlogProduct,
  },
  props: {
    popular: {
      type: Array,
      request: true,
    },
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
    };
  },
};
</script>

<style>
.blog-popular-claider {
  display: flex !important;
  /*margin: 0 -20px;*/
}
.blog-popular-claider [data-v-e4caeaf8] {
  height: 100%;
  /*margin: 0 20px;*/
}
.blog-popular-claider .slick-arrow:before {
  color: #000;
}
</style>
