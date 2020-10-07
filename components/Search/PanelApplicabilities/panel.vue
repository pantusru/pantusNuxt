<template>
  <b-row class="align-items-center mb-3">
    <Parent :PanelId="PanelId" />
    <Children
      :PanelId="PanelId"
      Data="DataModel"
      NameData="DataGenerations"
      NameSelected="SelectedModel"
      NameSelectedClildren="SelectedGenerations"
    />
    <Children
      :PanelId="PanelId"
      Data="DataGenerations"
      NameSelected="SelectedGenerations"
    />
    <b-col cols="2">
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
import Parent from "@/components/Search/PanelApplicabilities/Select/Parent";
import Children from "@/components/Search/PanelApplicabilities/Select/Children";
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