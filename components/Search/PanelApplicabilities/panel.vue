<template>
  <!-- БЫДЛО КОД ПОТОМ ИСПРАВЛЯТЬ!!!!!!!!!!!!!!!!!!! -->
  <b-row class="align-items-center mb-3">
    <b-col cols="3">
      <div class="mr-3 form-control">
        <span v-if="SelectMarka.length != 0">
          {{
            Applicabilities.filter((dataset) => dataset.id == SelectMarka)[0]
              .name
          }}
        </span>
      </div>
      <b-form-select v-model="Panel" :select-size="4">
        <template v-slot:first>
          <b-form-select-option
            @click="setDataModel(index)"
            v-for="(data, index) in Applicabilities"
            :key="data.id"
            :value="data.id"
            >{{ data.name }}</b-form-select-option
          >
        </template>
      </b-form-select>
    </b-col>
    <b-col cols="4">
      <div class="mr-3 form-control">
        <span v-for="id in SelectModel" :key="id">
          {{ dataModel.filter((dataset) => dataset.id == id)[0].name + ", " }}
        </span>
      </div>
      <b-form-select multiple :select-size="4" v-model="Panel">
        <template v-slot:first>
          <b-form-select-option
            @click="setDataGenerations(data.id)"
            v-for="data in dataModel"
            :key="data.id"
            :value="data.id"
            >{{ data.name }}</b-form-select-option
          >
        </template>
      </b-form-select>
    </b-col>
    <b-col cols="3">
      <div class="mr-3 form-control">
        <span v-for="id in SelectGenerations" :key="id">
          {{
            dataGenerations.filter((dataset) => dataset.id == id)[0].name +
            " , "
          }}
        </span>
      </div>
      <b-form-select multiple :select-size="4" v-model="Panel">
        <template v-slot:first>
          <b-form-select-option
            v-for="data in dataGenerations"
            :key="data.id"
            :value="data.id"
            >{{ data.name }}</b-form-select-option
          >
        </template>
      </b-form-select>
    </b-col>
    <b-col cols="2">
      <b-button
        v-if="PanelLength != 1"
        class="bg-danger border-0"
        @click="DeletePanel"
        >X</b-button
      >
      {{Panel}}
    </b-col>
  </b-row>
</template>

<script>
export default {
  watch: {
    /**
     * ### Изменения select марки
     */
    SelectMarka() {
      this.SelectModel = [];
      this.SelectGenerations = [];
      this.dataGenerations = [];
    },
    /**
     * ### Изменения select модели
     * СЛожная реализация!
     */
    SelectModel() {
      this.SelectGenerations = [];
    },
  },
  methods: {
    /**
     * @function setDataModel -  Сохраняет массив отображаемых моделей взависимости от марки
     */
    setDataModel(index) {
      this.dataModel = this.Applicabilities[index].children;
    },
    /**
     * @function setDataGenerations -  Сохраняет массив отображаемых моделей взависимости от марки
     */
    setDataGenerations(id) {
      this.dataGenerations = [];
      this.SelectModel.forEach((id) => {
        let data = this.dataModel.filter((data) => data.id == id);
        data[0].children.forEach((element) => {
          this.dataGenerations.push(element);
        });
      });
    },
    /**
     *
     */
    DeletePanel() {
      this.$store.dispatch("Applicabilities/Panel/DeletePanel", this.PanelId);
    },
  },
  data() {
    return {
      SelectAll:[],
      SelectMarka: [],
      SelectModel: [],
      SelectGenerations: [],
      dataModel: [],
      dataGenerations: [],
    };
  },
  props: {
    PanelId: {},
  },
  computed: {
    Applicabilities() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
      ];
    },
    PanelLength() {
      return this.$store.getters["Applicabilities/Panel/PanelLength"];
    },
    Panel:{
      get(){
        return this.$store.getters["Applicabilities/Panel/PanelId"](this.PanelId)[0].Selected;
      },
      set(value){
        console.log(value);
      //   this.$store.commit("Applicabilities/Panel/SetIdPanel" , {
      //     data: value,
      //     id: this.PanelId,
      //   });
      }
    }
  },
};
</script>

<style>
</style>

<!-- БЫДЛО КОД ПОТОМ ИСПРАВЛЯТЬ!!!!!!!!!!!!!!!!!!! -->