<template>
  <b-container>
    <h2 class="mb-4 mt-4">Популярные товары</h2>
    <FuncComponents :array="popular" />
  </b-container>
</template>

<script>
import FuncComponents from "@/components/func/product-blogs-get";
export default {
  name: "PopularProductsIndex",
  components: {
    FuncComponents,
  },
  props: {
    popular: {
      type: Array,
      request: true,
    },
  },
};
</script>
