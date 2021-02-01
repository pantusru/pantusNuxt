export const actions = {
  // Получить все новости!
  // data:{offets: -с какого числа начинать , limit: -сколько данных, }
  async _NewsAll({}, data) {
    return await this.$axios
      .$get(
        `${process.env.api}/news?page_size=${data.limit}&page_number=${data.offets}&sort_order=desc`
      )
      .then(res => {
        return res;
      });
  },
  async _NewsAllCount() {
    return await this.$axios.$get(`${process.env.api}/news/count`);
  },
  async _NewsCategoriesCount({}, id) {
    return await this.$axios.$get(
      `${process.env.api}/news/count?filter_categories=${id}`
    );
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
        `${process.env.api}/news?filter_categories=${data.id}&page_size=${data.limit}&page_number=${data.offets}&sort_order=desc`
      )
      .then(res => {
        return res;
      });
  },
};
