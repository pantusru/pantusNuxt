<template>
  <div class="container">
    <div class="content-static" v-html="NewsId.content" />
    <table class="w-100"></table>
  </div>
</template>

<script>
export default {
  name: "NewsId",
  computed: {
    NewsId() {
      return this.$store.getters["News/NewsId/GetNewsId"];
    },
  },
};
</script>

<style>
@import "assets/css/static-page-main.css";
</style>
