export const state = () => ({
  /**
   * @property Vuex массив всех  применяемость
   */
  Applicabilities: [],
})
export const mutations = {
  /**
   * #Сохраняет в Vuex приминимости
   * @param {Array} data - Массив полученный из API
   */
  SetApplicabilities(store, data) {
    store.Applicabilities = data;
  },
  /**
   * # Сохраняет selectChecked выбрана ли это марка  для отображение в фильрах
   * @param data.index -  Индекс применяемости
   * @param data.value  - Значение применяемости
   */
  SetApplicabilitiesSelectChecked(store, data) {
    store.Applicabilities[data.index].selectChecked = data.value
  },
}
export const actions = {
  /**
   * #Запрос на получения  применяемость
   * @function  _Applicabilitiess проверка на наличие, запрос, сохранения в vuex
   */
  async _Applicabilitiess({store, dispatch, commit, getters}) {
    if (getters.GetApplicabilities.length === 0) {
      let data = await dispatch("Applicabilities/axios/_Applicabilities", {}, {root: true}); // ПОлучить данные
      // dispatch("Catalog/All/_All" , data,{ root: true }); //  Обработка данных в нужную структуру
      commit("SetApplicabilities", data);
    }
  }
}
export const getters = {
  /**
   * #Вывод всех  применяемость
   * @returns {Array}  Массив всех  применяемость
   */
  GetApplicabilities: s => s.Applicabilities,
  GetApplicabilitiesParentId: s => id => s.Applicabilities.findIndex(data => data.id === id),
}

