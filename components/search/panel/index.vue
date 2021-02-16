<template>
  <b-form-group class="border px-3 py-2 border-light">
    <base-title-filter :text="items" />
    <VInputV :data="data" />
    <Data :name="name" :data="data" />
  </b-form-group>
</template>

<script>
import VInputV from "@/components/search/panel/input/index";
import Data from "@/components/search/panel/panel-data/index";
import BaseTitleFilter from "@/components/base/title/base-title-filter";
export default {
  components: {
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
  computed: {
    data() {
      return this.$store.getters[this.ArrayData];
    },
  },
};
</script>
