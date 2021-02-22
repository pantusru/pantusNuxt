<template>
  <div class="container">
    <div class="content-static col-8" v-html="NewsId.content" />
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
.btn.red {
  background: #dc3545;
  color: #ffffff;
  padding: 8px !important;
}
ul > li:before {
  width: 5px;
  height: 5px;
  margin-right: 12px;
  margin-top: 8px;
  border-radius: 5px;
  background: #c8312b;
}
</style>
