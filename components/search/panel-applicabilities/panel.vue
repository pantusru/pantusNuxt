<template>
  <b-row class="align-items-start mb-3 px-3">
    <Parent
      :panel-id="PanelId"
      class="col-12 col-md-3"
      place-holder-text="Марка автомобиля"
    />
    <Children
      class="col-12 col-md-4"
      :panel-id="PanelId"
      data="DataModel"
      name-data="DataGenerations"
      name-selected="SelectedModel"
      name-selected-clildren="SelectedGenerations"
      place-holder-text="Модели"
    />
    <Children
      class="col-12 col-md-4"
      :panel-id="PanelId"
      data="DataGenerations"
      name-selected="SelectedGenerations"
      place-holder-text="Модификации"
    />
    <b-col cols="1">
      <b-button
        v-if="PanelLength !== 1"
        class="btn bg-danger _baseBnt py-1 px-2 btn-secondary"
        @click="DeletePanel"
        >Удалить</b-button
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
