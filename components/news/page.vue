<template>
  <div class="page-news">
    <b-row>
      <VueBlogNews v-for="data in dataset" :key="data.id" :data="data" />
    </b-row>
    <div class="overflow-auto">
      <b-pagination-nav
        :link-gen="linkGen"
        :number-of-pages="Count"
        use-router
        align="center"
      />
    </div>
  </div>
</template>

<script>
import VueBlogNews from "@/components/news/news-blog-get";
import PageMixins from "@/mixins/page/index";
export default {
  mixins: [PageMixins],
  props: {
    dataset: {},
    Count: {},
  },
  components: {
    VueBlogNews,
  },
};
</script>
