<template>
  <b-form-group class="border px-3 py-2 border-light">
    <get-filter :get-filter.sync="getFilter" :items="items" />
    <template v-if="getFilter">
      <VInputV :data="data" />
      <Data :name="name" :data="data" />
    </template>
  </b-form-group>
</template>

<script>
import VInputV from "@/components/search/panel/input/index";
import Data from "@/components/search/panel/panel-data/index";
import BaseTitleFilter from "@/components/base/title/base-title-filter";
import GetFilter from "@/components/search/get-filter";
export default {
  components: {
    GetFilter,
    BaseTitleFilter,
    // ButtonFull,
    Data,
    VInputV,
  },
  provide() {
    return {
      ArrayData: this.ArrayData,
      SetValue: this.SetValue,
    };
  },
  props: ["items", "ArrayData", "name", "SetValue"],
  data() {
    return {
      getFilter: true,
    };
  },
  computed: {
    data() {
      return this.$store.getters[this.ArrayData];
    },
  },
};
</script>
