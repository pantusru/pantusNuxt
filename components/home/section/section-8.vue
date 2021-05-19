<template>
  <section class="section8">
    <div class="container">
      <h2 class="h2">
        <nuxt-link to="/popular" class="link-hover-main link">
          Новости
        </nuxt-link>
      </h2>
      <div class="row">
        <news class="news" v-for="news in popularNews" :key="news.id" :news="news" />
      </div>
      <nuxt-link to="/news" class="link-hover-main link section8-link__news">
        Все Новости
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
import 'swiper/swiper.min.css'

import { Section8 } from '~/composition/home/section/section-8'
import News from '~/components/news/news.vue'
export default {
  name: 'Section8',
  components: {
    News,
  },
  setup() {
    return { ...Section8() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/home/section/section8"
</style>
