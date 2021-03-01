<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-8">
        <b class="fz-4 mb-2 d-block">
          {{ NewsId.dates.created.slice(0, 10) }}</b
        >
        <div class="container-static" v-html="NewsId.content" />
      </div>
      <div class="col-4 d-none d-lg-block">
        <h2 class="mb-3 px-15px">Новости</h2>
        <VueBlogNews
          v-for="data in NewsAll.slice(0, 3)"
          :key="data.id"
          :data="data"
        />
      </div>
    </div>
    <table class="w-100" />
  </div>
</template>

<script>
import VueBlogNews from "@/components/news/news-blog-get";
import Img from "@/mixins/document-selector/img";
import Row from "@/mixins/document-selector/row";
export default {
  name: "NewsId",
  components: {
    VueBlogNews,
  },
  mixins: [Img, Row],
  computed: {
    NewsAll() {
      return this.$store.getters["News/NewsIndex/GetNewsIndex"];
    },
    NewsId() {
      return this.$store.getters["News/NewsId/GetNewsId"];
    },
  },
  mounted() {
    this.imgAll();
    this.rowAll();
  },
};
</script>

<style>
@import "assets/css/static-page-main.css";
.container-static ul > li {
  position: relative;
}
.container-static ul > li:before {
  width: 5px;
  height: 5px;
  margin-right: 12px;
  margin-top: 8px;
  border-radius: 5px;
  background: #c8312b;
  position: absolute;
  top: 0;
  right: 100%;
  content: "";
}
</style>
