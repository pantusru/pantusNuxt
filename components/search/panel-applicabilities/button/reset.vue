<template>
  <div class="mt-2">
    <span
      v-on:click.prevent="ResetApplicabilities"
      class="link-danger cursor-pointer"
    >
      Сброс фильтры
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    async ResetApplicabilities() {
      await this.$store.dispatch("Applicabilities/Panel/ResetAll");
      if (this.$route.query.filter_applicabilities !== undefined) {
        await this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            filter_applicabilities: undefined,
            page_number: undefined
          }
        });
      } else {
        await this.$store.dispatch("Applicabilities/Panel/ResetAll");
      }
    }
  },
  destroyed() {
    this.$store.commit("Applicabilities/Panel/DeleteAllPanel");
  }
};
</script>
