<template>
  <div class="container">
    <div v-if="newsId.content" class="news-id" v-html="newsId.content" />
  </div>
</template>

<script lang="ts">
import { PageNewsId } from '~/composition/news/page-news-id'

export default {
  name: 'PageNewsId',
  setup() {
    return { ...PageNewsId() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/news/news-id"
</style>
