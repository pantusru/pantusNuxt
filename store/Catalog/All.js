export const actions = {
  /**
   * #прогоняет массив сбрасывая свойства элементам
   * @function _AllChexbox -  свойствам: CheckedType, Indeterminate  задает значения false
   * @param {Array} data - массив фильтров с вложенностью
   */
  _AllChexbox({ commit, dispatch, getters }, data) {
    // Reset and уход с страницы фильты
    data.forEach(element => {
      commit(
        "Catalog/Chexbox/SetChecboxCheckedType",
        { data: element, value: false },
        { root: true }
      );
      commit(
        "Catalog/Chexbox/SetChecboxIndeterminate",
        { data: element, value: false },
        { root: true }
      );
      if (element.children.length !== 0) {
        dispatch("_AllChexbox", element.children);
      }
    });
  },
  /**
   * #прогоняет массив сбрасывая свойства элементам
   * @function _AllVisible -  свойствам: visible  задает значения true
   * @param {Array} data - массив фильтров
   */
  _AllVisible({ commit, dispatch }, data) {
    // Reset visible
    data.forEach(element => {
      commit(
        "Catalog/Visible/SetAllVisible",
        { data: element, value: true },
        { root: true }
      );
      if (element.children.length !== 0) {
        dispatch("_AllVisible", element.children);
      }
    });
  },
  /**
   * #прогоняет массив и ищет свойство CheckedType == true
   * @param {Array} data - массив фильтров c вложенностью
   * @returns {Array} Массив ID у который стоит chexbox
   */
  async _AllChexboxId({ commit, dispatch }, data) {
    // Найди ID chexbox у которых checked === true
    const IdChexbox = [];
    for (const key in data) {
      if (data[key].children.length !== 0) {
        IdChexbox.push(await dispatch("_AllChexboxId", data[key].children));
      }
      if (data[key].CheckedType === true && data[key].Indeterminate === false) {
        IdChexbox.push(data[key].id);
      }
    }
    return IdChexbox.flat(Infinity);
  },
  /**
   * #прогоняет массив и ищет свойство id == data.ids
   * @function _AllChexboxTrue - Выставляет всё фильтры по url адресу
   * @param {Array} data.data - массив фильтров c вложенностью
   * @param {Array} data.ids - Массив ID у который стоит chexbox
   */
  async _AllChexboxTrue({ store, commit, dispatch, getters }, data) {
    // Найди ID с url и сделать ему checked = true
    // Педелелать в другую функцию
    const dataset = data.data;
    const ids = data.ids;
    await dispatch(
      "Catalog/Chexbox/ChexboxCheckAll",
      { arr: dataset, id: ids, value: true },
      { root: true }
    );
  },
};
