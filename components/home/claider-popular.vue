<template>
  <b-container>
    <h2 class="mb-4 mt-4">
      <nuxt-link class="text-dark" to="/popular">Популярные товары</nuxt-link>
    </h2>
    <VueSlickCarousel
      v-if="popular.length !== 0"
      class="blog-popular-claider"
      v-bind="settings"
      @init="initHandler"
    >
      <!--      <template #prevArrow> <div>вперед</div> </template>-->
      <b-col v-for="data in popular" :key="data.id" class="mb-3">
        <BlogProduct :dataset-product="data" />
      </b-col>
    </VueSlickCarousel>
  </b-container>
</template>

<script>
import slaider from "@/mixins/slaider/index";
import BlogProduct from "@/components/products/popular/blog";
// import ModalImg from "@/components/modal/product-img";
// import ModalBuy from "@/components/modal/buy-product";
export default {
  name: "ClaiderPopular",
  components: {
    BlogProduct,
    // ModalImg,
    // ModalBuy,
  },
  mixins: [slaider],
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
        focusOnSelect: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [],
      },
      responsiveSettings: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
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
.blog-popular-claider .slick-next {
  right: -11px;
}
.blog-popular-claider .slick-prev {
  left: -11px;
}
</style>
