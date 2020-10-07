<template>
  <!-- БЫДЛО КОД ПОТОМ ИСПРАВЛЯТЬ!!!!!!!!!!!!!!!!!!! -->
  <b-row class="align-items-center mb-3">
    <Parent :PanelId="PanelId" />
    <Children
      :PanelId="PanelId"
      Name="SelectedModel"
      NameParent="SelectedMarka"
    />
    <!-- <Children/> -->
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
    // setDataModel(index) {
    //   this.dataModel = this.Applicabilities[index].children;
    // },
    // setDataGenerations(id) {
    //   this.dataGenerations = [];
    //   this.SelectModel.forEach((id) => {
    //     let data = this.dataModel.filter((data) => data.id == id);
    //     data[0].children.forEach((element) => {
    //       this.dataGenerations.push(element);
    //     });
    //   });
    // },
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

<style>
</style>

<!-- БЫДЛО КОД ПОТОМ ИСПРАВЛЯТЬ!!!!!!!!!!!!!!!!!!! -->