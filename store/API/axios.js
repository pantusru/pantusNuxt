export const actions = {
  /**
   * #Поиск городов по API
   * @param {string} data - название города
   * @returns {Object} массив объектов города, length = 10
   * @async
   *
   */
  async _API_Town({}, data) {
    return await this.$axios.get(`${process.env.api}/fias?query=${data}`);
  },
};
