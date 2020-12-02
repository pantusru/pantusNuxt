export default {
  methods: {
    linkGen(pageNum) {
      // генерация ссылок Page
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    },
  },
};
