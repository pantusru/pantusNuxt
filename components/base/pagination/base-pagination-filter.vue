<template>
  <b-pagination-nav
    v-if="countPage > 1"
    limit="3"
    hide-goto-end-buttons
    size="sm"
    :value="$route.query.page_number || 1"
    :link-gen="linkGen"
    :number-of-pages="countPage"
    use-router
    first-number
    last-number
    align="center"
  />
</template>

<script>
import PageFilter from "@/mixins/page/filter";
export default {
  name: "BasePaginationFilter",
  mixins: [PageFilter],
  props: {
    length: {
      type: Number,
    },
    limit: {
      default: 10,
      type: Number,
    },
  },
  computed: {
    countPage() {
      const data = Math.ceil(this.length / this.limit);
      if (data === 0) {
        return 1;
      } else {
        return data;
      }
    },
  },
};
</script>
<style></style>
