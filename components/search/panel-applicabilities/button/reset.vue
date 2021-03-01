<template>
  <div class="mt-2 mb-1">
    <span
      class="link-danger cursor-pointer"
      @click.prevent="ResetApplicabilities"
    >
      Сброс применяемостей
    </span>
  </div>
</template>

<script>
export default {
  destroyed() {
    this.$store.commit("Applicabilities/Panel/DeleteAllPanel");
  },
  methods: {
    async ResetApplicabilities() {
      this.$store.commit("SetcheckFilterClick", "resetApplicabilities");
      await this.$store.dispatch("Applicabilities/Panel/ResetAll");
      if (this.$route.query.filter_applicabilities !== undefined) {
        await this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            filter_applicabilities: undefined,
            page_number: undefined,
          },
        });
      } else {
        await this.$store.dispatch("Applicabilities/Panel/ResetAll");
      }
    },
  },
};
</script>
