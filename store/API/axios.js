export const actions = {
  /**
   * #Поиск городов по API
   * @param {string} data - название города
   * @returns {Object} массив объектов города, length = 10
   * @async
   *
   */
  async _API_Town({}, data) {
    const a = `https://cors-anywhere.herokuapp.com/https://kladr-api.ru/api.php?query=${data}&contentType=city&withParent=1&token=ADy8fErZKZsbezdF37QbihtZSbiaabza&limit=10`;
    return await this.$axios.$get(a).then(res => {
      return res;
    });
  }
};
