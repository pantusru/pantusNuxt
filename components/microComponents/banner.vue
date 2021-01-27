<template>
  <div class="banner col-3">
    <VueSlickCarousel v-bind="Settings">
      <a v-for="data in img" :key="data.id" class="banner_img">
        <img :src="data.src" :alt="data.alt" >
      </a>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  props: ["img"],
  data() {
    return {
      Settings: {
        fade: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
      },
    };
  },
};
</script>
