export const actions = {
  /**
   * #Запрос на все бренды
   * @returns {Object} массив объектов брендов
   * @async
   *
   */
  async _Brands({ dispatch }) {
    const data = await this.$axios.$get(`${process.env.api}/product_brands`);
    return await dispatch("_init_Brands", { data });
  },
  async _BrandsId({ dispatch }) {
    const data = await this.$axios.$get(`${process.env.api}/product_brands`);
    return data;
    // return await dispatch("_init_Brands", { data });
  },
  /**
   *
   * @param data
   */
  _init_Brands({}, data) {
    const dataset = [];
    data.data.forEach(array => {
      dataset.push({
        name: array.name,
        id: array.id,
      });
    });
    return dataset;
  },
};
