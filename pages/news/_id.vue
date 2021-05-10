<template>
  <div class="container">
    <div class="row">
      <div v-if="newsId" class="news-id" v-html="newsId.content" />
      <div v-if="newsPopular.length !== 0" class="news-view-wrapper">
        <news
          v-for="news in newsPopular"
          :key="news"
          class="news-view"
          :news="news"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PageNewsId } from '~/composition/news/page-news-id'
import News from '~/components/news/news.vue'

export default {
  name: 'PageNewsId',
  components: { News },
  setup() {
    return { ...PageNewsId() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/news/news-id"
</style>
