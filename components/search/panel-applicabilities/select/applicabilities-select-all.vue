<template>
  <b-col cols="3" class="mb-3 mb-md-0">
    <div
      class="mr-3 form-control h-30px"
      v-on-clickaway="hiddenForm"
      @click="show = true"
    >
      <!-- children -->
      <div v-if="type === 'children'">
        <div v-if="PanelData.length !== 0">
          <span v-for="id in panel" :key="id">
            <template
              v-if="PanelData.filter(data => data.id == id)[0] !== undefined"
            >
              {{ PanelData.filter(data => data.id == id)[0].name }}
            </template>
          </span>
        </div>
        <div v-else>Нету применяемости</div>
      </div>
      <!-- parent -->
      <div v-else-if="type === 'parent'">
        <div v-if="PanelData.length !== 0">
          <template v-if="panel.length !== 0">
            {{ Applicabilities.filter(data => data.id === panel)[0].name }}
          </template>
        </div>
        <div v-else>Нету применяемости</div>
      </div>
    </div>
    <!--          :select-size="4" -->
    <ul
      class="overflow px-0 position-absolute app-select"
      v-if="show && PanelData.length > 0"
    >
      <panel-applicabilities-li
        :type="type"
        v-for="dataset in PanelData"
        :key="dataset.id"
        :dataset="dataset"
        :arr="PanelData"
        :panel="panel"
        @click="showHidden"
        v-on:panel="
          $emit('update:panel', { id: $event.id, value: $event.value })
        "
      />
    </ul>
  </b-col>
</template>
<script>
import { directive as onClickaway } from "vue-clickaway";
import PanelApplicabilitiesLi from "@/components/search/panel-applicabilities/option/panel-applicabilities-li";

export default {
  components: { PanelApplicabilitiesLi },
  directives: {
    onClickaway: onClickaway
  },
  data() {
    return {
      show: false
    };
  },
  props: {
    PanelData: {
      default: []
    },
    panel: {},
    multiple: {
      type: Boolean,
      default: true
    },
    type: {
      default: "children"
    }
  },
  methods: {
    hiddenForm(event) {
      if (
        event.target.className !== "option-my" &&
        event.target.className !== "option-my active-li" &&
        event.target.className !== "option-my active-li children"
      ) {
        this.show = false;
      }
    },
    showHidden() {
      // Скрыть окно если можно выбрать 1 элемент
      if (this.type === "parent") {
        // Пропсом это флаг это родитель или потомок
        this.show = false;
      }
    }
  },
  computed: {
    Applicabilities() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
      ];
    }
  }
};
</script>

<style>
.app-select {
  border: 1px solid #666666;
  width: 93%;
  z-index: 2;
  background-color: #fff;
}
</style>
