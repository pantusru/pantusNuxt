<template>
  <section v-if="NewsPage" class="">
    <div class="container">
      <b-row class="mb-4">
        <b-col
          v-for="data in CategoriesAll"
          :key="data.id"
          cols="12"
          sm="6"
          lg="3"
        >
          <NewsCategoriesAll :dataset="data" />
        </b-col>
      </b-row>
      <h3 class="mb-3">{{ nameCategories }}</h3>
      <NewsPageIndex :dataset="NewsPage" :count="CountPage" />
    </div>
  </section>
</template>

<script>
import NewsCategoriesAll from "~/components/news/categories/index";
import NewsPageIndex from "~/components/news/page";
export default {
  name: "NewsCategoriesIdPage",
  components: {
    NewsPageIndex,
    NewsCategoriesAll,
  },
  data() {
    return {
      nameCategories: "",
    };
  },
  computed: {
    NewsPage() {
      return this.$store.getters["News/NewsCategoriesPage/GetNewsVisible"];
    },
    CountPage() {
      return this.$store.getters["News/NewsCategoriesPage/GetPage"];
    },
    CategoriesAll() {
      return this.$store.getters["News/CategoriesAll/GetNewsCategories"];
    },
  },
  watch: {
    // при изменения page
    async $route() {
      window.scrollTo(0, 0);
      await this.Add();
    },
  },
  created() {
    this.nameCategories = this.$store.getters[
      "News/CategoriesAll/GetNewsCategoriesCode"
    ](this.$route.params.id)[0].name;
  },
  methods: {
    async Add() {
      // Закачка товара при клике на ссылку
      await this.$store.dispatch(
        "News/NewsCategoriesPage/_NewsCategoriesPage",
        { page: this.$route.query.page, id: this.$route.params.id }
      );
      await this.$store.dispatch("News/CategoriesAll/_NewsCategories"); // Все категории
      const id = this.$store.getters[
        "News/CategoriesAll/GetNewsCategoriesCode"
      ](this.$route.params.id)[0].id;
      if (id) {
        await this.$store.dispatch(
          "News/NewsCategoriesPage/_NewsCategoriesPage",
          {
            // все новости 1 категории
            page: this.$route.query.page,
            id,
          }
        );
      } else {
        await this.$router.push("/404");
      }
    },
  },
};
</script>

<style scoped></style>
