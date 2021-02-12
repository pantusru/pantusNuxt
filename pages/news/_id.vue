<template>
  <div>
    <news-categories-id-page v-if="getBlock === 'categories'" />
    <news-id v-if="getBlock === 'id'" />
  </div>
</template>

<script>
import NewsCategoriesIdPage from "~/components/news/page/index_categories_id";
import NewsId from "~/components/news/page/index_id";
export default {
  components: {
    NewsId,
    NewsCategoriesIdPage,
  },
  data() {
    return {
      getBlock: "",
    };
  },
  async fetch({ query, store, getters, params, redirect }) {
    if (!isNaN(params.id)) {
      await store.dispatch("News/NewsId/_NewsId", params.id); // 1 новость
    } else {
      await store.dispatch("News/CategoriesAll/_NewsCategories"); // Все категории
      const id = store.getters["News/CategoriesAll/GetNewsCategoriesCode"](
        params.id
      )[0]?.id;
      if (id) {
        await store.dispatch("News/NewsCategoriesPage/_NewsCategoriesPage", {
          // все новости 1 категории
          page: query.page,
          id,
        });
      } else {
        redirect("/404");
      }
    }
  },
  // computed: {
  //   NewsPage() {
  //     return this.$store.getters["News/NewsCategoriesPage/GetNewsVisible"];
  //   },
  //   CountPage() {
  //     return this.$store.getters["News/NewsCategoriesPage/GetPage"];
  //   },
  // },

  created() {
    if (!isNaN(this.$route.params.id)) {
      this.getBlock = "id";
    } else {
      this.getBlock = "categories";
    }
  },
};
</script>
