export const actions = {
  /**
   * #Запрос на все бренды
   * @returns {Object} массив объектов брендов
   * @async
   *
   */
  async _Brands() {
    return await this.$axios.$get(`${process.env.api}/product_brands`).then(res => {
      let data = [];
      res.forEach(array => {
        data.push({
          name: array.name,
          id: array.id,
        })
      })
      return data;
    });
  },
}


