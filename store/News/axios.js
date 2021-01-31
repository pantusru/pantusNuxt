export const actions = {
  // Получить все новости!
  // data:{offets: -с какого числа начинать , limit: -сколько данных, }
  async _NewsAll({}, data) {
    return await this.$axios
      .$get(
        `${process.env.api}/news?page_size=${data.limit}&page_number=${data.offets}`
      )
      .then(res => {
        return res;
      });
  },
  //  Получить одну новость по ID
  async _NewsId({}, id) {
    return await this.$axios.$get(`${process.env.api}/news/${id}`).then(res => {
      return res;
    });
  },
  // Получить все категории новостей
  async _NewsСategoriesAll({}) {
    return await this.$axios
      .$get(`${process.env.api}/news/categories`)
      .then(res => {
        return res;
      });
  },
  // Получить новости по категории
  async _CategoriesNews({}, data) {
    return await this.$axios
      .$get(
        `${process.env.api}/news/category/?id=${data.id}&page_size=${data.limit}&page_number=${data.offets}`
      )
      .then(res => {
        return res;
      });
  },
};
