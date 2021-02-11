<template>
  <span>
    <h5 v-if="checkCountProducts" class="mb-3">
      По запросу найдено: {{ countProducts }}
    </h5>
    <h5 v-if="!checkCountProducts">Ожидайте идет загрузка товара</h5>
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
