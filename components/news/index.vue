<template>
  <section class="">
    <div class="container">
      <h2 class="mb-3">Новости</h2>
      <b-row v-if="NewsIndex">
        <VueBlogNews class='col-12 col-md-6 col-lg-4' v-for="data in NewsIndex" :key="data.id" :data="data" />
      </b-row>
      <b-link to="news/" class="d-block text-center text-body link-danger">
        <b>Все новости</b></b-link
      >
    </div>
  </section>
</template>

<script>
import VueBlogNews from "@/components/news/news-blog-get";
export default {
  components: {
    VueBlogNews,
  },
  computed: {
    NewsIndex() {
      return this.$store.getters["News/NewsIndex/GetNewsIndex"];
    },
  },
};
</script>
