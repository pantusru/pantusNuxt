<template>
  <b-button @click="AddPanel">+</b-button>
</template>

<script>
export default {
  methods: {
    AddPanel() {
      this.$store.commit("Applicabilities/Panel/SetPanelNew");
    },
  },
};
</script>

<style>
</style>