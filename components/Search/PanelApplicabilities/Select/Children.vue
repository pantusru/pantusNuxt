<template>
  <b-col cols="3" class="mb-3 mb-md-0">
    <div
      class="mr-3 form-control h-30px"
      v-on-clickaway="hiddenForm"
      @click="show = true"
    >
      <div v-if="PanelData.length != 0">
        <span v-for="id in Panel" :key="id">
          <template
            v-if="PanelData.filter((data) => data.id == id)[0] != undefined"
          >
            {{ PanelData.filter((data) => data.id == id)[0].name + ", " }}
          </template>
        </span>
      </div>
      <div v-else>Нету применяемости</div>
    </div>
    <b-form-select
      multiple
      :select-size="4"
      v-model="Panel"
      v-if="show && PanelData.length > 0"
    >
      <template v-slot:first>
        <b-form-select-option
          class="option-my"
          v-for="element in PanelData"
          :key="element.id"
          :value="element.id"
          >{{ element.name }}</b-form-select-option
        >
      </template>
    </b-form-select>
  </b-col>
</template>
<script>
import { directive as onClickaway } from "vue-clickaway";
export default {
  directives: {
    onClickaway: onClickaway,
  },
  data() {
    return {
      show: false,
    };
  },
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
        this.$store.commit("Applicabilities/Panel/SetPanel", {
          // Сохранить текущее изменения во VUEX
          id: this.PanelId,
          value: value,
          name: this.NameSelected,
        });
        if (this.NameData != undefined) { // Если ли потомки у панели
          this.checkChildrenData();
          if (value.length == 1 && length == 1) { // Проверяка что нужно удалить все выбранные потомки
            this.$store.commit("Applicabilities/Panel/SetPanel", {// Сохраняет во VUEX Data потомка
              id: this.PanelId,
              value: [],
              name: this.NameSelectedClildren,
            });
          } else if(value.length < length && this.PanelSelectedChildren.length > 0){ // Проверка что нужно перебрать выбранные потомки
            this.PanelSelectedChildren.forEach((SelectedChildren, index) => {
              let check = false;
              for (const dataChildren in this.PanelDataChildren) {// Прогоняем отображаемые потомки
                if (SelectedChildren == this.PanelDataChildren[dataChildren].id) { // Выбранный потомок
                  check = true;
                  break;
                }
              }
              if (check == false || this.PanelDataChildren.length == 0) {// ПРогоняем выбранные потомки
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
    hiddenForm(event) {
      if (event.target.className != "option-my") {
        this.show = false;
      }
    },
    checkChildrenData() {
      // Если ли потомки
      let dataset = [];
      this.Panel.forEach((id) => {
        // Прогоняем selected текущей панели
        let elements = this.PanelData.filter((data) => data.id == id); // Находим в Data текущего selected где true
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