export const actions = {
  /**
   * #Поиск городов по API
   * @param {string} data - название города
   * @returns {Object} массив объектов города, length = 10
   * @async
   *
   */
  async _API_Town({}, data) {
    const res = await this.$axios.get(`${process.env.api}/kladr?query=${data}`);
    return res.data;
  },
  async _API_Russia({ rootGetters, store, dispatch }, to) {
    let symma = rootGetters["Cart/CartAll/GetSymmaAll"];
    const weight = rootGetters["Cart/CartAll/GetWeightAll"];
    symma = Math.trunc(symma) * 100;
    const res = await this.$axios.get(
      `${process.env.api}/rupost?sumoc=${symma}&to=${to}&weight=${weight}`
    );
    // const email = rootGetters["Order/Payment/Index/GetCostDostavkaId"](4)[0];
    dispatch(
      "Order/Payment/Index/SetDostavkaExtra",
      `${Number(res.data.paynds) / 100}`,
      { root: true }
    );
  },
};
