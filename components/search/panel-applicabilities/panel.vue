<template>
  <b-row class="align-items-center mb-3">
    <Parent :PanelId="PanelId" class="col-12 col-md-3"/>
    <Children
    class="col-12 col-md-4"
      :PanelId="PanelId"
      Data="DataModel"
      NameData="DataGenerations"
      NameSelected="SelectedModel"
      NameSelectedClildren="SelectedGenerations"
    />
    <Children
    class="col-12 col-md-4"
      :PanelId="PanelId"
      Data="DataGenerations"
      NameSelected="SelectedGenerations"
    />
    <b-col cols="1">
      <b-button
        v-if="PanelLength != 1"
        class="bg-danger border-0"
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
  methods: {
    DeletePanel() {
      this.$store.dispatch("Applicabilities/Panel/DeletePanel", this.PanelId);
    },
  },
  props: {
    PanelId: {},
  },
  computed: {
    PanelLength() {
      return this.$store.getters["Applicabilities/Panel/PanelLength"];
    },
  },
};
</script>
