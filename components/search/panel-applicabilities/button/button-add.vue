<template>
  <b-button v-if="show" @click="AddPanel">+</b-button>
</template>

<script>
export default {
  methods: {
    AddPanel() {
      this.$store.dispatch("Applicabilities/Panel/SetPanelNew");
    },
  },
  computed: {
    lengthApplicabilitiess() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
      ].length;
    },
    lengthPanel() {
      return this.$store.getters["Applicabilities/Panel/PanelLength"];
    },
    show() {
      return this.lengthApplicabilitiess > this.lengthPanel;
    },
  },
};
</script>

<style></style>
