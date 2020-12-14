export const state = () => ({
  MyOrder: [],
});
export const mutations = {
  /***
   * ###Сохранить order с api
   */
  SetMyOrder(store, data) {
    store.MyOrder = data;
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
  async _MyOrderAll({ dispatch, commit }) {
    // Добавить data page, и передавать в API ЗАпрос
    const data = await dispatch("MyOrder/axios/_MyOrder", {}, { root: true });
    commit("SetMyOrder", data);
  },
};
export const getters = {
  GetMyOrder: s => s.MyOrder,
};
