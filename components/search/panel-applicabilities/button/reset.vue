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
    ResetApplicabilities() {
      // this.$store.dispatch("Applicabilities/Panel/ResetAll");
      if (this.$route.query.filter_applicabilities !== undefined) {
        this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            filter_applicabilities: undefined,
            page_number: undefined
          }
        });
      } else {
        this.$store.dispatch("Applicabilities/Panel/ResetAll");
      }
    }
  },
  destroyed() {
    this.$store.commit("Applicabilities/Panel/DeleteAllPanel");
  }
};
</script>
