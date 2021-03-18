<template>
<!--  <b-button-->
<!--    title="Добавить применяемость"-->
<!--    v-if="show"-->
<!--    class="filter_applicabilities-button_add-input"-->
<!--    @click="AddPanel"-->
<!--    >+-->
<!--  </b-button>-->

  <b-button variant="success" class="btn _baseBnt py-1 px-2 btn-secondary" @click="AddPanel">Добавить</b-button>

<!--  <b-icon-plus-circle-fill-->

<!--    v-if="show"-->
<!--    class="filter_applicabilities-button_add-input text-success"-->
<!--    @click="AddPanel"-->
<!--  >-->

<!--  </b-icon-plus-circle-fill>-->

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
    font-size: 31px
    cursor: pointer

    &:hover, &:focus
      color: #1e7e34 !important


</style>
