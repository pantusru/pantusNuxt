<template>
  <div class="row mt-2">
    <nuxt-link
      v-for="filter in GetFilter.children"
      :key="filter.id"
      class="px-3 mb-1"
      :to="$route.path + '/' + filter.code"
    >
      {{ filter.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "FilterTop",
  computed: {
    GetFilter() {
      return this.$store.getters["product-static/getFilter"];
    },
  },
};
</script>
