<template>
  <b-container>
    <h2 class="mb-4 mt-4">Популярные товары</h2>
    <FuncComponents :array="popular"> </FuncComponents>
  </b-container>
</template>

<script>
import FuncComponents from "@/components/func/product-blogs-get";
export default {
  name: "popular-products-index",
  props: {
    popular: {
      type: Array,
      request: true,
    },
  },
  components: {
    FuncComponents,
  },
};
</script>
