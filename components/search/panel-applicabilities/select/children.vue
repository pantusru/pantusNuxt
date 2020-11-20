<template>
  <applicabilities-select-all
    :PanelData="PanelData"
    :panel.sync="Panel"
  />
</template>
<script>
import ApplicabilitiesSelectAll from "@/components/search/panel-applicabilities/select/applicabilities-select-all";
export default {
  components: {ApplicabilitiesSelectAll},
  props: {
    /**
     * @property названия подкатегории текущей select Data
     */
    Data: {},
    /**
     * @property названия подкатегории текущей select выбранные
     */
    NameSelected: {},
    /**
     * @property id текущей Panel в которой находится select
     */
    PanelId: {},
    /**
     * @property названия подкатегории потомка select Data
     */
    NameData: {},
    /**
     * @property названия  потомка select выбранные
     */
    NameSelectedClildren: {},
  },
  computed: {
    /**
     * @property Выбранные Checbox в текущем select
     */
    Panel: {
      get() {
        return this.$store.getters["Applicabilities/Panel/PanelId"](
          this.PanelId
        )[this.NameSelected];
      },
      set(value) {
        let length = this.Panel.length;
        if(value.value){
          this.$store.commit("Applicabilities/Panel/PushPanel", {
            // Сохранить новое значение во VUEX
            id: this.PanelId,
            value: value.id,
            name: this.NameSelected,
          });
        }else {
          let index = this.Panel.findIndex(data => data == value.id);
          if(index !== -1){
            this.$store.commit("Applicabilities/Panel/DeleteElementPanel",{
              IdPanel: this.PanelId,
              indexElement: index,
              NameElement: this.NameSelected,
            });
          }
        }
        if (this.NameData !== undefined) { // Если ли потомки у панели
          this.checkChildrenData();
          if (length === 0) { // Проверяка что нужно удалить все выбранные потомки
            this.$store.commit("Applicabilities/Panel/SetPanel", {// Сохраняет во VUEX Data потомка
              id: this.PanelId,
              value: [],
              name: this.NameSelectedClildren,
            });
          }
          else if(this.PanelSelectedChildren.length > 0){ // Проверка что нужно перебрать выбранные потомки
            this.PanelSelectedChildren.forEach((SelectedChildren, index) => {
              let check = false;
              for (const dataChildren in this.PanelDataChildren) {// Прогоняем отображаемые потомки
                if (SelectedChildren === this.PanelDataChildren[dataChildren].id) { // Выбранный потомок
                  check = true;
                  break;
                }
              }
              if (check === false || this.PanelDataChildren.length === 0) {// ПРогоняем выбранные потомки
                this.$store.commit("Applicabilities/Panel/DeleteElementPanel", {// Удаляем PanelSelectedChildren через index
                  IdPanel: this.PanelId,
                  indexElement: index,
                  NameElement: this.NameSelectedClildren,
                });
              }
            });
          }
        }
      },
    },
    /**
     * @property Отображаемые Checbox в текущем select
     */
    PanelData() {
      return this.$store.getters["Applicabilities/Panel/PanelId"](this.PanelId)[
        this.Data
      ];
    },
    /**
     * @property Отображаемые Checbox в потомственном select
     */
    PanelDataChildren() {
      return this.$store.getters["Applicabilities/Panel/PanelId"](this.PanelId)[
        this.NameData
      ];
    },
    /**
     * @property Отображаемые Checbox в потомственном select
     */
    PanelSelectedChildren() {
      return this.$store.getters["Applicabilities/Panel/PanelId"](this.PanelId)[
        this.NameSelectedClildren
      ];
    },
  },

  methods: {
    checkChildrenData() {
      // Если ли потомки
      let dataset = [];
      this.Panel.forEach((id) => {
        // Прогоняем selected текущей панели
        let elements = this.PanelData.filter((data) => data.id === id); // Находим в Data текущего selected где true
        elements[0].children.forEach((element) => {
          // Прогоняем всех потомков
          dataset.push(element);
        });
      });
      this.$store.commit("Applicabilities/Panel/SetPanel", {
        // Сохраняет во VUEX Data потомка
        id: this.PanelId,
        value: dataset,
        name: this.NameData,
      });
    },
  },
};
</script>

<style>
</style>
