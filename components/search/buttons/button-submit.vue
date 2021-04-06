<template>
  <b-button v-on:click="All" variant="danger" class="btn bg-danger _baseBnt py-1 px-2 btn-secondary">Показать</b-button>
</template>

<script>
import SearchSubmit from "@/mixins/search-submit/index";
export default {
  mixins: [SearchSubmit],
  methods: {
    async All(event) {
      this.$store.commit("SetcheckFilterClick", undefined);
      await this.pushParamsFilter(event);
      this.pushParamsSort();
      await this.PushUrl();
    },
  },
};
</script>
