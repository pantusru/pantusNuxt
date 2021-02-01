<template>
  <section v-if="NewsPage" class="">
    <div class="container">
      <h3 class="mb-3">Новости</h3>
      <NewsPageIndex :dataset="NewsPage" :count="CountPage" />
    </div>
  </section>
</template>

<script>
import NewsPageIndex from "~/components/news/page";
export default {
  name: "NewsCategoriesIdPage",
  components: {
    NewsPageIndex,
  },
  computed: {
    NewsPage() {
      return this.$store.getters["News/NewsCategoriesPage/GetNewsVisible"];
    },
    CountPage() {
      return this.$store.getters["News/NewsCategoriesPage/GetPage"];
    },
  },
};
</script>

<style scoped></style>
