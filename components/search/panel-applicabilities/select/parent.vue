<template>
  <applicabilities-select-all
    :panel-data="Applicabilities"
    :panel.sync="PanelData"
    :multiple="false"
    :type="'parent'"
  />


</template>

<script>
import ApplicabilitiesSelectAll from "@/components/search/panel-applicabilities/select/applicabilities-select-all";
// import PanelApplicabilitiesLi from "@/components/search/panel-applicabilities/option/panel-applicabilities-li";
export default {
  components: {ApplicabilitiesSelectAll},
  data() {
    return {
      show: false,
    }
  },
  props: {
    /**
     * @property id текущей Panel в которой находится select
     */
    PanelId: {},
  },
  computed: {
    /**
     * @property Всё приминимости
     */
    Applicabilities() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
        ];
    },
    /**
     * @property Отображаемые Checbox в текущем select и сохраняет изменения во VUEX
     */
    PanelData: {
      get() {
        return this.$store.getters["Applicabilities/Panel/PanelId"](
          this.PanelId
        )["SelectedMarka"];
      },
      set(value) {
        let index = this.$store.getters['Applicabilities/ApplicabilitiessAll/GetApplicabilitiesParentId'](value);
        this.$store.commit("Applicabilities/Panel/SetPanel", {
          // Сохраняет во VUEX  SelectedMarka
          id: this.PanelId,
          value: value,
          name: "SelectedMarka",
        });
        this.$store.commit("Applicabilities/Panel/SetPanel", { // Сохранить дата модель
          id: this.PanelId,
          value: this.Applicabilities[index].children,
          name: "DataModel",
        });
        this.$store.commit("Applicabilities/Panel/ResetClildren", { // RESET  selected model
          id: this.PanelId,
          NameSelected: "SelectedModel",
        })
        this.$store.commit("Applicabilities/Panel/ResetClildren", { // RESET потомка selected  generations
          id: this.PanelId,
          NameSelected: "SelectedGenerations",
        })
        this.$store.commit("Applicabilities/Panel/ResetClildren", { // RESET потомка data  generations
          id: this.PanelId,
          NameSelected: "DataGenerations",
        })
      },
    },
  },
};
</script>
