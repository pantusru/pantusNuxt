<template>
  <section v-if="brandCarousel.length > 0" class="section-dealers mt-5">
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
        <!--        <template #prevArrow="arrowOption">-->
        <!--          <b-icon-arrow-left class="slick-arrow slick-next" />-->
        <!--        </template>-->
        <!--        <template #nextArrow>-->
        <!--          <div class="slick-arrow slick-prev">-></div>-->
        <!--        </template>-->
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
        // dots: true,
        infinite: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,

        autoplay: true,
        speed: 2000,
        // slidesToShow: 7,
        arrows: true,
        // infinite: true,
        initialSlide: 4,
        // swipeToSlide: true,
        // responsive: [],
      },
      responsiveSettings: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
.blog-dealerts
  padding-bottom: 20px
  .slick-track
    display: flex
    align-items: center
  .slick-dots
    margin-top: 20px
    position: static
.dealerts-img
  display: block
  margin: 0 20px
  max-width: 120px
  //margin:  0 15px
  img
    pointer-events: none
    //margin: 0 50px
    //width: 70%
.title-dealers
    text-align: center
    margin-bottom: 30px
.slick-prev:before, .slick-next:before
  color: black

//#__layout > div > main > div:nth-child(1) > section.section-dealers.mt-5 > div > div > div > div
.section-dealers
  margin-bottom: 25px
section.section-dealers .slick-track
  left: -18px !important

section.section-dealers .slick-arrow
  top: calc(100% + 15px)
  color: black
  //&::after
  //  content: ""
  //&::before
  //  content: ""

section.section-dealers .slick-next
  right: 20px
section.section-dealers .slick-prev
  left: 20px
</style>
