export const actions = {
  // Получить все новости!
  // data:{offets: -с какого числа начинать , limit: -сколько данных, }
  async _NewsAll({}, data) {
    return await this.$axios
      .$get(
        `https://www.pantus.ru/api/rest/2.0/news?limit=${data.limit}&offset=${data.offets}`
      )
      .then(res => {
        return res;
      });
  },
  //  Получить одну новость по ID
  async _NewsId({}, id) {
    return await this.$axios
      .$get(`${process.env.api}/news/detail?id=${id}`)
      .then(res => {
        return res;
      });
  },
  // Получить все категории новостей
  async _NewsСategoriesAll({}) {
    return await this.$axios
      .$get("https://www.pantus.ru/api/rest/2.0/news/categories")
      .then(res => {
        return res.data;
      });
  },
  // Получить новости по категории
  async _CategoriesNews({}, data) {
    return await this.$axios
      .$get(
        `${process.env.api}/news/category/?id=${data.id}&limit=${data.limit}&offset=${data.offets}`
      )
      .then(res => {
        return res;
      });
  }
};
