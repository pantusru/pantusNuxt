import Vue from "vue";
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
  pushMyOrder(store, data) {
    Vue.set(store.MyOrder[data.index], "offers", data.value);
    // store.MyOrder[data.index].offers = data.value;
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
    // const id = dataset.id;
    // const check = dataset.check;
    // Добавить data page, и передавать в API ЗАпрос
    const data = await dispatch(
      "MyOrder/axios/_MyOrderId",
      { id },
      { root: true }
    );
    commit("SetMyOrderId", data);
  },
  async _MyOrderOffer({ dispatch, commit, rootState }, dataset) {
    const index = dataset.index;
    const id = dataset.id;
    if (!rootState.MyOrder.MyOrder[index].offers) {
      const data = await dispatch(
        "MyOrder/axios/_MyOrderId",
        { id, check: true },
        { root: true }
      );
      commit("pushMyOrder", { value: data, index });
    }
  },
};
export const getters = {
  GetMyOrder: s => s.MyOrder,
  GetMyOrderId: s => s.MyOrderId,
  GetCount: s => s.count,
};
