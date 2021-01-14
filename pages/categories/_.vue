<template>
  <b-container>
    <div>{{ categories }} 1</div>
  </b-container>
</template>

<script>
export default {
  name: "CategoriesProduct",
  data() {
    return {
      categories: "categories",
    };
  },
  async fetch({ params, store, getters, commit }) {
    const functionSearch = (data, dataset, index) => {
      let id;
      const code = data[index];
      const result = dataset.filter(elem => elem.code === code);
      if (result.length !== 0) {
        if (data.length - 1 !== index) {
          index++;
          id = functionSearch(data, result[0].children, index);
        } else if (data.length - 1 === index) {
          console.log(result[0]);
          return result[0];
        }
      }
      return id;
    };
    await store.dispatch("Categories/CategoriesAll/_Categories");
    const data = params.pathMatch.split("/");
    const dataset = store.getters["Categories/CategoriesAll/GetCategories"];
    this.categories = functionSearch(data, dataset, 0);
  },
};
</script>
