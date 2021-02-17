<template>
  <b-form-group class="border px-3 py-2 border-light">
    <GetFilter :items="items" :get-filter.sync="getFilter" />
    <template v-if="getFilter">
      <Vinput :get-name="GetName" @Vsearch="ValueSet" />
      <Data
        :search-elem="SearchElem"
        :get-checbox="GetChecbox"
        :set-checbox="SetChecbox"
      />
    </template>
  </b-form-group>
</template>

<script>
import Data from "@/components/search/panel-brand/brands-data/index";
import Vinput from "@/components/search/panel-brand/input/index";
import BaseTitleFilter from "@/components/base/title/base-title-filter";
import GetFilter from "@/components/search/get-filter";
export default {
  components: {
    GetFilter,
    BaseTitleFilter,
    Vinput,
    Data,
  },
  props: ["name", "SetChecbox", "GetName", "items", "GetChecbox"],
  data() {
    return {
      SearchElem: this.$store.getters[this.GetName],
      getFilter: true,
    };
  },
  methods: {
    // получение результата от компонента поиска
    ValueSet(data) {
      this.SearchElem = data.data;
    },
    // getFilterClick() {
    //   this.getFilter = !this.getFilter;
    // },
  },
};
</script>
