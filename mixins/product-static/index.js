export default {
  methods: {
    functionSearch(data, dataset, index) {
      let id;
      const code = data[index];
      const result = dataset.filter(elem => elem.code === code);
      if (result.length !== 0) {
        if (data.length - 1 !== index) {
          index++;
          id = this.functionSearch(data, result[0].children, index);
        } else if (data.length - 1 === index) {
          return result[0];
        }
      }
      return id;
    },
    async SetProductVue(id, filter) {
      this.$store.commit("product-static/SetFilter", filter);
      await this.$store.dispatch("product-static/RequestProduct", {
        filter_categories: id,
        page_number: this.$route.query.page_number,
      });
    },
  },
};
