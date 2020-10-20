<template>
  <b-col cols="3" class="mb-3 mb-md-0">
    <div class="mr-3 form-control h-45px" v-on-clickaway="hiddenForm" @click="show=true">
      <div v-if="PanelData.length != 0">
        <span v-for="id in Panel" :key="id">
          <template
            v-if="PanelData.filter((data) => data.id == id)[0] != undefined"
          >
            {{ PanelData.filter((data) => data.id == id)[0].name + ", " }}
          </template>
        </span>
      </div>
      <div v-else>Нету приминимостей</div>
    </div>
    <b-form-select multiple :select-size="4" v-model="Panel" v-if="show && PanelData.length > 0">
      <template v-slot:first>
        <b-form-select-option
          class="option-my"
          v-for="(element) in PanelData"
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
  data(){
    return{
      show: false,
    }
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
    hiddenForm(event){
      if(event.target.className != "option-my"){
        this.show = false;
      }
    }
  },
};
</script>

<style>
</style>