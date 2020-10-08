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
      this.$store.commit("Applicabilities/Panel/ResetAll");
      if (this.$route.query.applicabilities != undefined || true) {
        this.$router.push({
          path: this.$route.path,
          query: { ...this.$route.query, applicabilities: undefined },
        });
      }
    },
  },
};
</script>

 