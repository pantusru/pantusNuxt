<template>
<!-- БЫДЛО КОД ПОТОМ ИСПРАВЛЯТЬ!!!!!!!!!!!!!!!!!!! -->
  <b-row class="align-items-center">
    <b-col cols="3">
      <b-input
        class="mr-3 form-control"
        placeholder="Марка"
        :value="SelectMarka"
      ></b-input>
      <b-form-select :select-size="4" v-model="SelectMarka">
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
      <b-input
        class="mr-3"
        placeholder="Модель"
        v-model="SelectModel"
      ></b-input>
      <b-form-select :select-size="4" v-model="SelectModel">
        <template v-slot:first>
          <b-form-select-option
            @click="setDataGenerations(index)"
            v-for="(data, index) in dataModel"
            :key="data.id"
            :value="data.id"
            >{{ data.name }}</b-form-select-option
          >
        </template>
      </b-form-select>
    </b-col>
    <b-col cols="3">
      <b-input class="mr-3" placeholder="Поколения"></b-input>
      <b-form-select :select-size="4" v-model="SelectGenerations">
        <template v-slot:first>
          <b-form-select-option
            v-for="(data) in dataGenerations"
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
  methods: {
    setDataModel(index) {
      this.dataModel = this.Applicabilities[index].children;
    },
    setDataGenerations(index) {
      this.dataGenerations = this.dataModel[index].children;
      console.log(this.dataGenerations);
    },
  },
  data() {
    return {
      SelectMarka: "",
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