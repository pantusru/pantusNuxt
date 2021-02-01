export const state = () => ({
  /**
   * @property Vuex массив всех  применяемость
   */
  Applicabilities: [],
  ApplicabilitiesDescription: {},
});
export const mutations = {
  /**
   * #Сохраняет в Vuex приминимости
   * @param {Array} data - Массив полученный из API
   */
  SetApplicabilities(store, data) {
    store.Applicabilities = data;
  },
  SetApplicabilitiesDescription(store, data) {
    store.ApplicabilitiesDescription = data;
  },
  /**
   * # Сохраняет selectChecked выбрана ли это марка  для отображение в фильрах
   * @param data.index -  Индекс применяемости
   * @param data.value  - Значение применяемости
   */
  SetApplicabilitiesSelectChecked(store, data) {
    store.Applicabilities[data.index].selectChecked = data.value;
  },
};
export const actions = {
  /**
   * #Запрос на получения  применяемость
   * @function  _Applicabilitiess проверка на наличие, запрос, сохранения в vuex
   */
  async _Applicabilitiess({ store, dispatch, commit, getters }) {
    if (getters.GetApplicabilities.length === 0) {
      const data = await dispatch(
        "Applicabilities/axios/_Applicabilities",
        {},
        { root: true }
      ); // ПОлучить данные
      // dispatch("Catalog/All/_All" , data,{ root: true }); //  Обработка данных в нужную структуру
      commit("SetApplicabilities", data);
    }
  },
  async _ApplicabilitiesDescription({ store, dispatch, commit }, id) {
    const res = await dispatch(
      "Applicabilities/axios/_ApplicabilitiesDescription",
      id,
      {
        root: true,
      }
    );
    commit("SetApplicabilitiesDescription", res);
  },
};
export const getters = {
  /**
   * #Вывод всех  применяемость
   * @returns {Array}  Массив всех  применяемость
   */
  GetApplicabilitiesDescription: s => s.ApplicabilitiesDescription,
  GetApplicabilities: s => s.Applicabilities,
  GetApplicabilitiesParentId: s => id =>
    s.Applicabilities.findIndex(data => data.id === id),
};
