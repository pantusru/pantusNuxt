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
    Delete() {
      let query;
      if (this.link.CheckedType === undefined) {
        this.$store.commit("formSearch/RemoreBrandsChecked",{
          id: this.link.id
        });
        query = this.$route.query.brand.split(",");
        for (const key in query) { // ПРогоняем Query Brand
          if (query[key] == this.link.id) {
            query.splice(key, 1);
            break;
          }
        }
        this.$router.push({ // Изменение url
          name: "search",
          query: {
            ...this.$route.query,
            brand: query.join(),
          },
        });
      } 
      else {
        console.log("Это Категория");
        query = this.$route.query.categories;
      }
      this.$store.commit("Catalog/Metks/DeleteMetks", { index: this.index });
    },
  },
};
</script>

<style>
</style>