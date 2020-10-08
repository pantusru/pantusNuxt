<template>
  <div class="mt-2">
    <b-button class="cursor-pointer" @click="ResetAll"
      >Сбросить фильтры</b-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    ResetAll() {
      this.$store.commit("Applicabilities/Panel/ResetAll");
      if (this.$route.query.applicabilities != undefined) {
        delete this.$route.query.applicabilities;
        // this.$router.push({
        //   name: "search",
        //   query: { ... data },
        // });
      }
    },
  },
};
</script>

 