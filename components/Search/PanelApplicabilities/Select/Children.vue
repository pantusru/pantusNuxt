<template>
<!--            {{ PanelData.filter((data) => data.id == id)[0].name }} -->
  <b-col cols="4">
    <div class="mr-3 form-control h-100">
      <!-- ПЕРЕДЕЛАТЬ ПОСЛЕ ПОЯВЛЕНИЕ АДЕКВАТНОГО VUEX -->
      <div v-if="PanelData.length != 0">
        <span v-for="id in Panel" :key="id">
          {{PanelData.filter((data) => data.id == id)[0].name + ", "}}
 
        </span>
      </div>
      <!-- ПЕРЕДЕЛАТЬ ПОСЛЕ ПОЯВЛЕНИЕ АДЕКВАТНОГО VUEX -->
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
    Data: {},
    NameSelected: {},
    PanelId: {},
    NameData:{},
  },
  computed: {
    Panel: {
      get() {
        return this.$store.getters["Applicabilities/Panel/PanelId"](
          this.PanelId
        )[0][this.NameSelected];
      },
      set(value) {
        this.$store.commit("Applicabilities/Panel/SetPanel", {
          id: this.PanelId,
          value: value,
          name: this.NameSelected,
        });
      },
    },
    PanelData() {
      return this.$store.getters["Applicabilities/Panel/PanelId"](
        this.PanelId
      )[0][this.Data];
    },
  },
  methods: {
    SetVuex(index) {
      if(this.NameData != undefined){
        let dataset = [];
        this.Panel.forEach(id => {
          let elements =  this.PanelData.filter((data) => data.id == id);
          elements[0].children.forEach((element)=>{
            dataset.push(element);
          })
        });
        this.$store.commit("Applicabilities/Panel/SetPanel", {
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