<template>
  <div>
    <section1 />
    <section2 />
    <section3 />
    <section4 :brands="getCarousel" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Section1 from '~/components/home/section/section-1.vue'
import Section2 from '~/components/home/section/section-2.vue'
import Section3 from '~/components/home/section/section-3.vue'
import { BrandCarousel } from '~/composition/brand/brand-carousel'
import Section4 from '~/components/home/section/section-4.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { Section4, Section3, Section2, Section1 },
  setup() {
    return { ...BrandCarousel() }
  },
})
</script>
<style lang="sass">
@import "assets/sass/home/home"
</style>
