<template>
  <!-- БЫДЛО КОД ПОТОМ ИСПРАВЛЯТЬ!!!!!!!!!!!!!!!!!!! -->
  <b-row class="align-items-center">
    <b-col cols="3">
      <b-input class="mr-3 form-control" placeholder="Марка"></b-input>
      <b-form-select v-model="SelectMarka" :select-size="4">
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
      <b-input class="mr-3" placeholder="Модель"></b-input>
      <b-form-select multiple :select-size="4" v-model="SelectModel">
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
      <b-input class="mr-3" placeholder="Поколения"></b-input>
      <b-form-select multiple :select-size="4" v-model="SelectGenerations">
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
    <b-col cols="2"> УДАЛИТЬ </b-col>
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
        let data  = this.dataModel.filter(data => data.id == id);
        data[0].children.forEach((element) => {
          this.dataGenerations.push(element);
        });
      });
    },
  },
  data() {
    return {
      SelectMarka: [],
      SelectModel: [],
      SelectGenerations: [],
      dataModel: [],
      dataGenerations: [],
    };
  },
  computed: {
    Applicabilities() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
      ];
    },
  },
};
</script>

<style>
</style>

<!-- БЫДЛО КОД ПОТОМ ИСПРАВЛЯТЬ!!!!!!!!!!!!!!!!!!! -->