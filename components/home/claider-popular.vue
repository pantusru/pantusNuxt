<template>
  <b-container>
    <h2 class="mb-4 mt-4">Популярные товары</h2>
    <VueSlickCarousel
      v-if="popular.length !== 0"
      class="blog-popular-claider"
      v-bind="settings"
    >
      <!--      <template #prevArrow> <div>вперед</div> </template>-->
      <b-col v-for="data in popular" :key="data.id" class="mb-3">
        <BlogProduct :dataset-product="data" />
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
  mounted() {
    this.check_slide_count();
    // при прогрузке странице
    // this.$store.commit("SetShow", false);
    window.addEventListener("resize", () => {
      this.check_slide_count();
    });
  },
  destroyed() {
    window.removeEventListener("resize", () => {});
  },
  methods: {
    slideCount(count) {
      this.settings.slidesToShow = count;
      this.settings.slidesToScroll = count;
    },
    check_slide_count() {
      if (document.body.clientWidth < 768) {
        this.slideCount(1);
      } else if (document.body.clientWidth < 992) {
        this.slideCount(2);
      } else {
        this.slideCount(3);
      }
    },
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
