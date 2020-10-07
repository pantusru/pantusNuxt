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
    Data: {},
    NameSelected: {},
    PanelId: {},
    NameData: {},
    NameSelectedClildren: {},
  },
  computed: {
    Panel: {
      get() {
        return this.$store.getters["Applicabilities/Panel/PanelId"](
          this.PanelId
        )[this.NameSelected];
      },
      set(value) {
        // Пустой родитель очищаем потомков
        if (value.length == 0) {
          this.$store.commit("Applicabilities/Panel/ResetAll", {
            id: this.PanelId,
            NameSelected: this.NameSelectedClildren,
            NameData: this.NameData,
          })
        }
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
      )[this.Data];
    },
    PanelClildren() {
      return this.$store.getters["Applicabilities/Panel/PanelId"](
        this.PanelId
      )[this.NameSelectedClildren];
    },
  },
  methods: {
    SetVuex(index) {
      if (this.NameData != undefined) {
        let dataset = [];
        this.Panel.forEach((id) => {
          let elements = this.PanelData.filter((data) => data.id == id);
          elements[0].children.forEach((element) => {
            dataset.push(element);
          });
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