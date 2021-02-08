<template>
  <section class="">
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
      <h3 class="mb-3">Новости</h3>
      <NewsPageIndex v-if="NewsPage" :dataset="NewsPage" :count="CountPage" />
    </div>
  </section>
</template>

<script>
import NewsCategoriesAll from "~/components/news/categories/index";
import NewsPageIndex from "~/components/news/page";
export default {
  components: {
    NewsPageIndex,
    NewsCategoriesAll,
  },
  async fetch({ query, store, getters }) {
    await Promise.all([
      store.dispatch("News/CategoriesAll/_NewsCategories"),
      store.dispatch("News/NewsPage/_NewsPage", query.page),
    ]);
  },
  head() {
    return {
      title: `Новости рынка автозапчастей, обзоры и сравнение производителей, брендов и деталей, уход и обслуживание автомобиля`,
      meta: [
        {
          name: "description",
          content: `В этом разделе команда Pantus.ru опираясь на знание и опыт, а также возможность прямого контакта с производителями запчастей и экспертами рынка поможет сделать правильный выбор и избежать ошибок при покупке запчастей и ведении автобизнеса.`,
        },
        {
          name: "keywords",
          content: `автозапчасти бизнес выбор продажа сравнение обзор производители уход автомобилем обслуживание новости статьи пантус`,
        },
      ],
    };
  },
  computed: {
    NewsPage() {
      return this.$store.getters["News/NewsPage/GetNewsVisible"];
    },
    CategoriesAll() {
      return this.$store.getters["News/CategoriesAll/GetNewsCategories"];
    },
    CountPage() {
      return this.$store.getters["News/NewsPage/GetPage"];
    },
  },
  watch: {
    // при изменения page
    $route() {
      this.Add();
      window.scrollTo(0, 0);
    },
  },
  methods: {
    async Add() {
      // Закачка товара при клике на ссылку
      await this.$store.dispatch(
        "News/NewsPage/_NewsPage",
        this.$route.query.page
      );
    },
  },
};
</script>
