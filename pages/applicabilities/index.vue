<template>
  <b-container>
    <Vinput
      class="col-12 col-lg-3 mx-auto"
      :data="dataset"
      :placeholders="'Поиск по применимостям'"
    />
    <base-title-catalog text="Применимости"></base-title-catalog>
    <b-row>
      <Applicabilities :dataset="data" v-for="data in dataset" :key="data.id" />
    </b-row>
  </b-container>
</template>

<script>
import Applicabilities from "@/components/catalog/applicabilities/applicabilities-blog-get";
import Vinput from "@/components/search/panel/input/index";
import BaseTitleCatalog from "@/components/base/title/base-title-catalog";
export default {
  async fetch({ query, store, getters, commit }) {
    await store.dispatch(
      "Applicabilities/ApplicabilitiessAll/_Applicabilitiess"
    );
  },
  provide() {
    return {
      SetValue: "Applicabilities/ApplicabilitiessAll/SetApplicabilities"
    };
  },
  components: {
    BaseTitleCatalog,
    Vinput,
    Applicabilities
  },
  computed: {
    dataset() {
      return this.$store.getters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilities"
      ];
    }
  },
  created() {
    this.$store.dispatch("Catalog/All/_AllVisible", this.dataset);
  }
};
</script>
