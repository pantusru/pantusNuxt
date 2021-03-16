<template>
  <section class="section-dealers mt-5">
    <h2 class="title-dealers">
      Мы официальные дилеры 45-ти производителей автозапчастей
    </h2>

    <div class="blog-dealerts">
      <VueSlickCarousel
        v-bind="settings"
        class="banner-dealerts"
        @init="initHandler"
      >
        <div v-for="data in brandCarousel" :key="data.id">
          <nuxt-link :to="'/brands/' + data.code" class="dealerts-img">
            <b-img :src="data.img" />
          </nuxt-link>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import slaider from "@/mixins/slaider/index";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  mixins: [slaider],
  data() {
    return {
      settings: {
        speed: 500,
        slidesToShow: 7,
        arrows: false,
        infinite: true,
        initialSlide: 4,
        swipeToSlide: true,
        responsive: [],
      },
      responsiveSettings: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
      ],
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

//#__layout > div > main > div:nth-child(1) > section.section-dealers.mt-5 > div > div > div > div

//section.section-dealers .slick-track
//  left: -35px !important
</style>
