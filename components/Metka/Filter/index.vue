<template>
  <div class="d-flex align-items-start">
    <span class="fz-5">{{ link.name }}</span>
    <b-badge @click="Delete" variant="light" pill class="mr-1 cursor-pointer"
      >X</b-badge
    >
  </div>
</template>

<script>
export default {
  props: {
    index: {},
    link: {},
  },
  methods: {
    async Delete() {
      let query;
      let name;
      if (this.link.CheckedType === undefined) {
        query = this.$route.query.brand.split(",");
        name = "brand";
        for (const key in query) {
          // ПРогоняем Query Brand
          if (query[key] == this.link.id) {
            query.splice(key, 1);
            break;
          }
        }
        console.log(this.link.id);  
        this.$store.commit("formSearch/RemoreBrandsChecked", {
          id: this.link.id,
        });
      } else {
        name = "categories";
        await this.$store.dispatch("Catalog/Chexbox/ChexboxCheckAll", {
          arr: this.$store.getters["Categories/CategoriesAll/GetCategories"],
          value: false,
          id: this.link.id,
        });
        query = await this.$store.dispatch(
          "Catalog/All/_AllChexboxId",
          this.$store.getters["Categories/CategoriesAll/GetCategories"]
        );
      }
      this.$store.commit("Catalog/Metks/DeleteMetks", { index: this.index });
      this.$router.push({
        // Изменение url
        name: "search",
        query: {
          ...this.$route.query,
          [name]: query.join(),
        },
      });
    },
  },
};
</script>

<style>
</style>