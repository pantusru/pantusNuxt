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
      if (this.$route.query.applicabilities != undefined) {
        this.$router.push({
          path: this.$route.path,
          query: { ...this.$route.query, applicabilities: undefined },
        });
      }
    },
  },
  destroyed(){
    this.$store.commit("Applicabilities/Panel/ResetAll");
  }
};
</script>

 