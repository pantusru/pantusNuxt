<template>
  <span>
    <h5 v-if="checkCountProducts" class="mb-3">
      <b> По запросу {{ string }} найдено: {{ countProducts }} </b>
    </h5>
    <h5 v-if="!checkCountProducts">Ожидайте идет загрузка товара</h5>
  </span>
</template>

<script>
export default {
  name: "GetCountRes",
  data() {
    return {
      string: "",
    };
  },
  computed: {
    countProducts() {
      return this.$store.getters["Products/GetCountProducts"];
    },
    checkCountProducts() {
      return this.$store.getters.getCheckCountProducts;
    },
    stringFilter() {
      return this.$store.getters["formSearch/GetSearch"];
    },
  },
  watch: {
    $route() {
      this.string = this.stringFilter;
    },
  },
  created() {
    this.string = this.stringFilter;
  },
};
</script>
