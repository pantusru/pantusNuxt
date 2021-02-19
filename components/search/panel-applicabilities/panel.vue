<template>
  <b-row class="align-items-start mb-3">
    <Parent :panel-id="PanelId" class="col-12 col-md-3" />
    <Children
      class="col-12 col-md-4"
      :panel-id="PanelId"
      data="DataModel"
      name-data="DataGenerations"
      name-selected="SelectedModel"
      name-selected-clildren="SelectedGenerations"
    />
    <Children
      class="col-12 col-md-4"
      :panel-id="PanelId"
      data="DataGenerations"
      name-selected="SelectedGenerations"
    />
    <b-col cols="1">
      <b-button
        v-if="PanelLength !== 1"
        class="bg-danger border-0 filter_applicabilities-button_delete-panel"
        @click="DeletePanel"
        >X</b-button
      >
    </b-col>
  </b-row>
</template>

<script>
import Parent from "@/components/search/panel-applicabilities/select/parent";
import Children from "@/components/search/panel-applicabilities/select/children";
export default {
  components: {
    Parent,
    Children,
  },
  props: {
    PanelId: {},
  },
  computed: {
    PanelLength() {
      return this.$store.getters["Applicabilities/Panel/PanelLength"];
    },
  },
  methods: {
    DeletePanel() {
      this.$store.dispatch("Applicabilities/Panel/DeletePanel", this.PanelId);
    },
  },
};
</script>
<style lang="sass">
.filter_applicabilities-button_delete-panel
  padding: 2px 8px
</style>
