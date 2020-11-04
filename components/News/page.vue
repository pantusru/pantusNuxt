<template>
  <div class="page-news">
    <b-row>
      <VueBlogNews v-for="data in dataset" :key="data.id" :data="data" />
    </b-row>
    <div class="overflow-auto">
      <b-pagination-nav
        :link-gen="linkGen"
        :number-of-pages="Kovlo"
        use-router
        align="center"
      />
    </div>
  </div>
</template>

<script>
import VueBlogNews from "@/components/News/news-blog-get";
import PageMixins from "@/mixins/Page/index";
export default {
  mixins: [PageMixins],
  props: {
    dataset: {},
    Kovlo: {},
  },
  components: {
    VueBlogNews,
  },
};
</script>
