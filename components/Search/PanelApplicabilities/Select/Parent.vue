<template>
  <b-col cols="3">
    <div class="mr-3 form-control">
      <span v-if="Panel.length != 0">
          {{ 
              Applicabilities.filter(data => data.id == Panel)[0].name
           }}
      </span>
    </div>
    <b-form-select v-model="Panel" :select-size="4">
      <template v-slot:first>
        <b-form-select-option
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
export default {
    data() {
        return {
            data: [],
        }
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
    Panel: {
      get() {
        return this.$store.getters["Applicabilities/Panel/PanelId"](
          this.PanelId
        )[0]["SelectedMarka"];
      },
      set(value) {

        this.$store.commit("Applicabilities/Panel/SetPanel", 
        { 
            id: this.PanelId,
            value: value,
            name: "SelectedMarka",
        });
      },
    },
  },
  methods: {
    SetVuex(index) {
        this.data =  this.Applicabilities[index].children;
        this.$store.commit("Applicabilities/Panel/SetPanel", {
            id: this.PanelId,
            value:  this.data,
            name: "DataModel",
        }) 
    },
  },
};
</script>