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
        <span v-for="id in Panel" :key="id">
          <template
            v-if="PanelData.filter
              ((data) => data.id == id)[0] !== undefined">
            {{ PanelData.filter((data) => data.id == id)[0].name }}
          </template>
        </span>
        </div>
        <div v-else>Нету применяемости</div>
      </div>
      <!-- parent -->
      <div v-else-if="type === 'parent'">
        <div v-if="PanelData.length !== 0">
          <template  v-if="Panel.length !== 0">
            {{PanelData.filter(data => data.id === Panel)[0].name}}
          </template>
        </div>
        <div v-else>Нету применяемости</div>
      </div>
    </div>
    <!--          :select-size="4" -->



    <b-form-select
      :select-size="4"  
      :multiple="multiple"
      :value="Panel"
      @input="$emit('update:panel', $event)"
      v-if="show && PanelData.length > 0"
    >
      <template #first>
        <b-form-select-option
          class="option-my"
          v-for="element in PanelData"
          :key="element.id"
          :value="element.id"
        >
          {{ element.name }}
        </b-form-select-option>
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
  data() {
    return {
      show: false,
    };
  },
  props: {
    PanelData:{
      default: [],
    },
    Panel:{

    },
    multiple:{
      type: Boolean,
      default: true,
    },
    type:{
      default: "children"
    }
  },
  methods: {
    hiddenForm(event) {
      if (event.target.className !== "option-my") {
        this.show = false;
      }
    },
  },
};
</script>

<style>
</style>
