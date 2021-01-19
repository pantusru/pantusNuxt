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
  async _BrandsId({ dispatch }, id) {
    const data = await this.$axios.$get(
      `${process.env.api}/product_brands/${id}`
    );
    if (data.id !== undefined) {
      return await dispatch("_init_BrandsId", data);
    }
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
        code: array.code,
        id: array.id,
        active: array.contains_description,
      });
    });
    return dataset;
  },
  _init_BrandsId({}, data) {
    return {
      name: data.name,
      code: data.code,
      id: data.id,
      active: data.contains_description,
      description: data.description,
    };
  },
};
