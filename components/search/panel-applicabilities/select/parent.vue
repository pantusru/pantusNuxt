<template>
<!--  <b-col cols="3" class="mb-3 mb-md-0">-->
<!--    <div-->
<!--      class="mr-3 form-control h-30px"-->
<!--      v-on-clickaway="hiddenForm"-->
<!--      @click="show=true"-->
<!--    >-->
<!--      <span v-if="PanelData.length != 0">-->
<!--        {{ Applicabilities.filter((data) => data.id == PanelData)[0].name }}-->
<!--      </span>-->
<!--    </div>-->
              <!--    <ul class="overflow-100px">-->
              <!--      <panel-applicabilities-li-->
              <!--        v-show="show === true"-->
              <!--        @click="SetVuex(index,data.id)"-->
              <!--        v-for="(data, index) in Applicabilities"-->
              <!--        :key="data.id"-->
              <!--        :text="data.name"-->
              <!--        :dataset="PanelData"-->
              <!--        :id="data.id"-->
              <!--      >-->

              <!--      </panel-applicabilities-li>-->
              <!--    </ul>-->
              <!--    :select-size="4" v-if="show === true" -->
<!--    <b-form-select :select-size="4" v-if="show === true" v-model="PanelData">-->
<!--      <template #first>-->
<!--        <b-form-select-option-->
<!--          class="option-my"-->
<!--          v-for="(data, index) in Applicabilities"-->
<!--          :key="data.id"-->
<!--          :value="data.id"-->
<!--        >{{ data.name }}-->
<!--        </b-form-select-option-->
<!--        >-->
<!--      </template>-->
<!--    </b-form-select>-->
<!--  </b-col>-->
  <applicabilities-select-all
    :panel-data="Applicabilities"
    :panel.sync="PanelData"
    :multiple="false"
    :type="'parent'"
  />


</template>

<script>
import {directive as onClickaway} from "vue-clickaway";
import ApplicabilitiesSelectAll from "@/components/search/panel-applicabilities/select/applicabilities-select-all";
// import PanelApplicabilitiesLi from "@/components/search/panel-applicabilities/option/panel-applicabilities-li";
export default {
  components: {ApplicabilitiesSelectAll},
  // components: {PanelApplicabilitiesLi},
  directives: {
    onClickaway: onClickaway,
  },
  data() {
    return {
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
        let index = this.$store.getters['Applicabilities/ApplicabilitiessAll/GetApplicabilitiesParentId'](value);
        this.$store.commit("Applicabilities/Panel/SetPanel", {
          // Сохраняет во VUEX  SelectedMarka
          id: this.PanelId,
          value: value,
          name: "SelectedMarka",
        });
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
    },
  },
  methods: {
    /**
     * @param index - индекс  применяемость
     * @function SetVuex - Сохраняет потомков при их наличие в Data
     */
    // SetVuex(index, value) {
    //   // this.$store.commit("Applicabilities/Panel/SetPanel", {
    //   //   // Сохраняет во VUEX  SelectedMarka
    //   //   id: this.PanelId,
    //   //   value: value,
    //   //   name: "SelectedMarka",
    //   // });
    //   this.$store.commit("Applicabilities/Panel/SetPanel", { // Сохранить дата модель
    //     id: this.PanelId,
    //     value: this.Applicabilities[index].children,
    //     name: "DataModel",
    //   });
    //   this.$store.commit("Applicabilities/Panel/ResetClildren", { // RESET  selected model
    //     id: this.PanelId,
    //     NameSelected: "SelectedModel",
    //   })
    //   this.$store.commit("Applicabilities/Panel/ResetClildren", { // RESET потомка selected  generations
    //     id: this.PanelId,
    //     NameSelected: "SelectedGenerations",
    //   })
    //   this.$store.commit("Applicabilities/Panel/ResetClildren", { // RESET потомка data  generations
    //     id: this.PanelId,
    //     NameSelected: "DataGenerations",
    //   })
    //
    // },
    hiddenForm(event) {
      console.log(event.target.className)
      if (event.target.className !== "option-my" || event.target.className !== "option-my activ-li") {
        this.show = false;
      }
    }
  },
};
</script>
