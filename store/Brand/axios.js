export const actions = {
  /**
   * #Запрос на все бренды
   * @returns {Object} массив объектов брендов
   * @async
   *
   */
  async _Brands({ dispatch }) {
    let data = await this.$axios.$get(`${process.env.api}/product_brands`);
    return await dispatch("_init_Brands", { data: data });
  },
  /**
   *
   * @param data
   */
  _init_Brands({}, data) {
    let dataset = [];
    data.data.forEach(array => {
      dataset.push({
        name: array.name,
        id: array.id
      });
    });
    return dataset;
  }
};
