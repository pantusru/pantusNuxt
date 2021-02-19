<template>
  <b-button
    title="Добавить применяемость"
    v-if="show"
    class="filter_applicabilities-button_add-input"
    @click="AddPanel"
    >+</b-button
  >
</template>

<script>
export default {
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
  methods: {
    AddPanel() {
      this.$store.dispatch("Applicabilities/Panel/SetPanelNew");
    },
  },
};
</script>

<style lang="sass">
.filter_applicabilities-button_add-input
  padding: 2px 8px
</style>
