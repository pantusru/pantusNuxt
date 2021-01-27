<template>
  <section class="section-dealers">
    <h2 class="title-dealers">
      Мы официальные дилеры 45-ти производителей автозапчастей
    </h2>

    <div class="blog-dealerts">
      <VueSlickCarousel v-bind="Settings" class="banner-dealerts">
        <div class="dealerts-img" v-for="data in img" :key="data.id">
          <img :src="data.src" :alt="data.alt" :data-id="data.id" />
        </div>
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
    VueSlickCarousel: VueSlickCarousel
  },
  data() {
    return {
      Settings: {
        speed: 500,
        slidesToShow: 7,
        arrows: true,
        infinite: true,
        initialSlide: 4,
        swipeToSlide: true
      },
      img: [
        { src: "img/trek.png", alt: "", id: "1" },
        { src: "img/trek.png", alt: "", id: "2" },
        { src: "img/trek.png", alt: "", id: "3" },
        { src: "img/trek.png", alt: "", id: "4" },
        { src: "img/trek.png", alt: "", id: "5" },
        { src: "img/trek.png", alt: "", id: "6" },
        { src: "img/trek.png", alt: "", id: "7" },
        { src: "img/trek.png", alt: "", id: "8" },
        { src: "img/trek.png", alt: "", id: "9" },
        { src: "img/trek.png", alt: "", id: "10" },
        { src: "img/trek.png", alt: "", id: "11" },
        { src: "img/trek.png", alt: "", id: "12" },
        { src: "img/trek.png", alt: "", id: "13" },
        { src: "img/trek.png", alt: "", id: "14" },
        { src: "img/trek.png", alt: "", id: "15" },
        { src: "img/trek.png", alt: "", id: "16" },
        { src: "img/trek.png", alt: "", id: "17" },
        { src: "img/trek.png", alt: "", id: "18" },
        { src: "img/trek.png", alt: "", id: "19" },
        { src: "img/trek.png", alt: "", id: "20" },
        { src: "img/trek.png", alt: "", id: "21" },
        { src: "img/trek.png", alt: "", id: "22" },
        { src: "img/trek.png", alt: "", id: "23" },
        { src: "img/trek.png", alt: "", id: "24" }
      ]
    };
  }
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
