export default {
  methods: {
    linkGen(pageNum) {
      // генерация ссылок Page
      // this.$store.commit("SetcheckFilterClick", false);
      let page;
      if (pageNum === 1) {
        page = undefined;
      } else {
        page = pageNum;
      }
      return {
        name: "search",
        query: {
          ...this.$route.query,
          page_number: page
        }
      };
    }
  }
};
