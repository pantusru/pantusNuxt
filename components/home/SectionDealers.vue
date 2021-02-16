<template>
  <section class="section-dealers mt-3">
    <h2 class="title-dealers">
      Мы официальные дилеры 45-ти производителей автозапчастей
    </h2>

    <div class="blog-dealerts">
      <VueSlickCarousel v-bind="Settings" class="banner-dealerts">
        <nuxt-link
          v-for="data in brandCarousel"
          :key="data.id"
          :to="'/brands/' + data.code"
          class="dealerts-img"
        >
          <img :src="data.img" />
        </nuxt-link>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      Settings: {
        speed: 500,
        slidesToShow: 7,
        arrows: true,
        infinite: true,
        initialSlide: 4,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              arrows: false,
            },
          },
        ],
      },
    };
  },
  computed: {
    brandCarousel() {
      return this.$store.getters["Brand/brand-carousel/getBrandCarouser"];
    },
  },
};
</script>

<style lang="sass">
.dealerts-img
  img
    pointer-events: none
    margin: 0 50px
    width: 70%
.title-dealers
    text-align: center
    margin-bottom: 30px
.slick-prev:before, .slick-next:before
  color: black
</style>
