<template>
  <b-col cols="3">
    <div class="mr-3 form-control h-100 p-2">
      <span v-if="PanelData.length != 0">
        {{ Applicabilities.filter((data) => data.id == PanelData)[0].name }}
      </span>
    </div>
    <b-form-select v-model="PanelData" :select-size="4">
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
     * @property Отображаемые Checbox в текущем select
     */
    PanelData: {
      get() {
        return this.$store.getters["Applicabilities/Panel/PanelId"](
          this.PanelId
        )["SelectedMarka"];
      },
      set(value) {
        this.$store.commit("Applicabilities/Panel/SetPanel", { // Сохраняет во VUEX  SelectedMarka
          id: this.PanelId,
          value: value,
          name: "SelectedMarka",
        });
      },
    },
  },
  methods: {
    /**
     * @param index - индекс приминимостей
     * @function SetVuex - Сохраняет потомков при их наличие в Data
     */
    SetVuex(index) {
      this.$store.commit("Applicabilities/Panel/SetPanel", {
        id: this.PanelId,
        value: this.Applicabilities[index].children,
        name: "DataModel",
      });
    },
  },
};
</script>