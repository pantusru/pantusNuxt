<template>
  <section class="section4">
    <div class="container">
      <h2 class="h2">
        Мы официальные дилеры 45-ти производителей автозапчастей
      </h2>
      <swiper :options="swiperOption">
        <swiper-slide v-for="brand in brands" :key="brand.code">
          <nuxt-link :to="brand.code">
            <img :src="brand.img" class="img section4-img" />
          </nuxt-link>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { PropType } from 'vue'
import { BrandCarousel } from '~/interface/brands/brand-carousel'
import { Section4 } from '~/composition/home/section/section-4'
export default {
  name: 'Section4',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    brands: Array as PropType<BrandCarousel[]>,
  },
  setup() {
    return { ...Section4() }
  },
}
</script>

<style lang="sass">
@import "assets/sass-mixin/index"
.section4
  +mb(20px)
.section4-img
  display: block
  margin: 0 20px
  max-width: 120px
.section4 .swiper-wrapper
  align-items: center
</style>
