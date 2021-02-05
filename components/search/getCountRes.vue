<template>
  <span v-if="checkCountProducts">
    <h5 class="mb-3">По запросу найдено: {{ countProducts }}</h5>
  </span>
</template>

<script>
export default {
  name: "GetCountRes",
  computed: {
    countProducts() {
      return this.$store.getters["Products/GetCountProducts"];
    },
    checkCountProducts() {
      return this.$store.getters.getCheckCountProducts;
    },
  },
};
</script>

<style scoped></style>
