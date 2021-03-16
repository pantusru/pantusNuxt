export const actions = {
  /**
   * #Запрос на все бренды
   * @returns {Object} массив объектов брендов
   * @async
   *
   */
  async _Certificates({ dispatch }) {
    const data = await this.$axios.$get(
      `${process.env.api}/product_brands/certificates`
    );
    return await dispatch("_init_Certificates", data);
  },
  /**
   *
   * @param data
   */
  _init_Certificates({}, data) {
    const dataset = [];
    if (data.length !== 0) {
      data.forEach(elem => {
        dataset.push({
          id: elem.id,
          image: elem.img,
          orientation: elem.orientation,
          name: elem.description,
        });
      });
    }
    return dataset;
  },
};
