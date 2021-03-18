<template>
  <applicabilities-select-all
    :panel-data="ApplicabilitiesFilter"
    :panel.sync="PanelData"
    :multiple="false"
    :type="'parent'"
    :place-holder-text="placeHolderText"
  />
</template>

<script>
import ApplicabilitiesSelectAll from "@/components/search/panel-applicabilities/select/applicabilities-select-all";
// import PanelApplicabilitiesLi from "@/components/search/panel-applicabilities/option/panel-applicabilities-li";
export default {
  components: { ApplicabilitiesSelectAll },
  data() {
    return {
      show: false,
    };
  },
  props: {
    /**
     * @property id текущей Panel в которой находится select
     */
    PanelId: {},
    placeHolderText: {},
  },
  computed: {
    /**
     * @property Всё приминимости который отображаются в select
     */
    ApplicabilitiesFilter() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
      ].filter(data => data.selectChecked === false);
    },
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
        let index = this.$store.getters[
          "Applicabilities/ApplicabilitiessAll/GetApplicabilitiesParentId"
        ](value.id);
        let indexReset = this.$store.getters[
          "Applicabilities/ApplicabilitiessAll/GetApplicabilitiesParentId"
        ](this.PanelData);
        // if(value.value === true){// Выбран не выбранный checked
        this.$store.commit("Applicabilities/Panel/SetPanel", {
          // Сохраняет во VUEX  SelectedMarka
          id: this.PanelId,
          value: value.id,
          name: "SelectedMarka",
        });
        this.$store.commit("Applicabilities/Panel/SetPanel", {
          // Сохранить дата модель
          id: this.PanelId,
          value: this.Applicabilities[index].children,
          name: "DataModel",
        });
        this.$store.commit(
          "Applicabilities/ApplicabilitiessAll/SetApplicabilitiesSelectChecked",
          {
            index: index,
            value: true,
          }
        );
        if (indexReset !== -1) {
          this.$store.commit(
            "Applicabilities/ApplicabilitiessAll/SetApplicabilitiesSelectChecked",
            {
              index: indexReset,
              value: false,
            }
          );
        }
        // }
        // else { // Выбран выбранный checked
        //   this.$store.commit("Applicabilities/Panel/SetPanel", { // reset MarkaSelected
        //     id: this.PanelId,
        //     value: "",
        //     name: "SelectedMarka",
        //   });
        //   this.$store.commit("Applicabilities/Panel/SetPanel", { // Reset дата модель
        //     id: this.PanelId,
        //     value: [],
        //     name: "DataModel",
        //   });
        // } // Код не имеет смысла с скрытием
        this.$store.commit("Applicabilities/Panel/ResetClildren", {
          // RESET  selected model
          id: this.PanelId,
          NameSelected: "SelectedModel",
        });
        this.$store.commit("Applicabilities/Panel/ResetClildren", {
          // RESET потомка selected  generations
          id: this.PanelId,
          NameSelected: "SelectedGenerations",
        });
        this.$store.commit("Applicabilities/Panel/ResetClildren", {
          // RESET потомка data  generations
          id: this.PanelId,
          NameSelected: "DataGenerations",
        });
      },
    },
  },
};
</script>
