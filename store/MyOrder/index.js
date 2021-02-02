export const state = () => ({
  MyOrder: [],
  MyOrderId: [],
  count: 0,
});
export const mutations = {
  /***
   * ###Сохранить order с api
   */
  SetMyOrder(store, data) {
    store.MyOrder = data;
  },
  SetMyOrderId(store, data) {
    store.MyOrderId = data;
  },
  SetCount(store, data) {
    store.count = data;
  },
  /**
   * ###Изменить order действия клиента
   * @param {String} data.name - ссылка
   */
  SetDataMyOrder(store, data) {
    data.code = "ОТ"; // Отмена
    data.name = "Отменен"; // Отмена
  },
};
export const actions = {
  async _MyOrderAll({ dispatch, commit }, dataset) {
    // Добавить data page, и передавать в API ЗАпрос
    const data = await dispatch(
      "MyOrder/axios/_MyOrder",
      { limit: 15, page: dataset.page },
      { root: true }
    );
    const count = await dispatch(
      "MyOrder/axios/_MyOrderCount",
      {},
      { root: true }
    );
    commit("SetCount", count);
    commit("SetMyOrder", data);
  },
  async _MyOrderId({ dispatch, commit }, id) {
    // Добавить data page, и передавать в API ЗАпрос
    const data = await dispatch("MyOrder/axios/_MyOrderId", id, { root: true });
    commit("SetMyOrderId", data);
  },
};
export const getters = {
  GetMyOrder: s => s.MyOrder,
  GetMyOrderId: s => s.MyOrderId,
  GetCount: s => s.count,
};
