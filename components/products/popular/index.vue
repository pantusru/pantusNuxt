<template>
  <b-container>
    <h2 class="mb-4 mt-4">Популярные товары</h2>
    <FuncComponents :array="popular"> </FuncComponents>
  </b-container>
</template>

<script>
import FuncComponents from "@/components/func/product-blogs-get";
export default {
  computed: {
    popular() {
      return this.$store.getters["Products/GetProducts"];
    }
  },
  components: {
    FuncComponents
  }
};
</script>
