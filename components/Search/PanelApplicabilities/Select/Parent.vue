<template>
  <b-col cols="3" class="mb-3 mb-md-0">
    <div class="mr-3 form-control h-45px" v-on-clickaway="hiddenForm" @click="show=true">
      <span v-if="PanelData.length != 0">
        {{ Applicabilities.filter((data) => data.id == PanelData)[0].name }}
      </span>
    </div>
    <b-form-select v-model="PanelData" :select-size="4" v-if="show === true">
      <template v-slot:first>
        <b-form-select-option
        class="option-my"
          @click="SetVuex(index)"
          v-for="(data, index) in Applicabilities"
          :key="data.id"
          :value="data.id"
          >{{ data.name }}</b-form-select-option
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
        this.$store.commit("Applicabilities/Panel/SetPanel", {
          // Сохраняет во VUEX  SelectedMarka
          id: this.PanelId,
          value: value,
          name: "SelectedMarka",
        });
      },
    },
  },
  methods: {
    /**
     * @param index - индекс  применяемость
     * @function SetVuex - Сохраняет потомков при их наличие в Data
     */
    SetVuex(index) {
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
    hiddenForm(event){
      if(event.target.className != "option-my"){
        this.show = false;
      }
    }
  },
};
</script>