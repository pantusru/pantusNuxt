<template>
  <b-col cols="3">
    <div class="mr-3 form-control h-100 p-2">
      <div v-if="PanelData.length != 0">
        <span v-for="id in Panel" :key="id">
          <template
            v-if="PanelData.filter((data) => data.id == id)[0] != undefined"
          >
            {{ PanelData.filter((data) => data.id == id)[0].name + ", " }}
          </template>
        </span>
      </div>
    </div>
    <b-form-select multiple :select-size="4" v-model="Panel">
      <template v-slot:first>
        <b-form-select-option
          @click="SetVuex(index)"
          v-for="(element, index) in PanelData"
          :key="element.id"
          :value="element.id"
          >{{ element.name }}</b-form-select-option
        >
      </template>
    </b-form-select>
  </b-col>
</template>
<script>
export default {
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
     * @property названия подкатегории потомка select выбранные
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
        // Пустой родитель очищаем потомков и потомки есть
        if (value.length == 0 && this.NameSelectedClildren != undefined) {
          this.$store.commit("Applicabilities/Panel/ResetClildren", { // RESET потомка
            id: this.PanelId,
            NameSelected: this.NameSelectedClildren,
            NameData: this.NameData,
          })
        }
        this.$store.commit("Applicabilities/Panel/SetPanel", { // Сохранить текущее изменения во VUEX
          id: this.PanelId,
          value: value,
          name: this.NameSelected,
        });
      },
    },
    /**
     * @property Отображаемые Checbox в текущем select
     */
    PanelData() {
      return this.$store.getters["Applicabilities/Panel/PanelId"](
        this.PanelId
      )[this.Data];
    },
  },

  methods: {
    /**
     * @function SetVuex - Сохраняет потомков при их наличие в Data
     */
    SetVuex() {
      if (this.NameData != undefined) {
        let dataset = [];
        this.Panel.forEach((id) => {
          let elements = this.PanelData.filter((data) => data.id == id);
          elements[0].children.forEach((element) => {
            dataset.push(element);
          });
        });
        this.$store.commit("Applicabilities/Panel/SetPanel", { // Сохраняет во VUEX Data потомка
          id: this.PanelId,
          value: dataset,
          name: this.NameData,
        });
      }
    },
  },
};
</script>

<style>
</style>