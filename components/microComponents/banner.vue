<template>
  <div class="banner col-5 mx-auto mx-lg-0 col-lg-3 mt-3 mt-lg-0">
    <VueSlickCarousel v-bind="Settings">
      <div v-for="data in img" :key="data.id">
        <nuxt-link :to="data.href" class="banner_img">
          <img :src="data.src" :alt="data.alt" />
        </nuxt-link>
      </div>
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
        // fade: true,
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
<style>
.pointer-event {
  /*pointer-events: none;*/
}
</style>
