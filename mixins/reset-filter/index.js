export default {
  methods: {
    ResetNoApplicabilitiess(seacrh = true) {
      this.$store.dispatch(
        "Catalog/All/_AllChexbox",
        this.$store.getters["Categories/CategoriesAll/GetCategories"]
      );
      this.$store.commit("formSearch/SetMaxValue", 60000);
      this.$store.commit("formSearch/SetMinValue", 0);
      this.$store.commit("formSearch/SetAllBrandsChecked", []);
      if (seacrh) {
        console.log("RESER SEARCH");
        this.$store.commit("formSearch/SetSearch", "");
      }
      this.$store.commit("formSearch/SetSort", { SortType: "", SortName: "" });
      this.$store.commit("Catalog/Metks/ResetMetks");
    },
  },
};
