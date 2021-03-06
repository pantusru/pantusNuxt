export const state = () => ({
  Metks: [],
});
export const mutations = {
  /**
   * @param data.link -  Ссылка на данные для добавляемой метки
   * @function ResetMetks - добавляет новую метку
   */
  PushMetks(store, data) {
    store.Metks.push(data);
  },
  /**
   * @function ResetMetks - Убирает все метки
   */
  ResetMetks(store) {
    store.Metks = [];
  },
  /**
   * @function  DeleteMetks - Удаляет указанную метку
   * @param {Number} data.index - index Удаляймой метки
   */
  DeleteMetks(store, data) {
    store.Metks.splice(data.index, 1);
  },
};
export const actions = {
  /**
   * @function SetMetksBrand - Сохраняет все метки Бренда
   * @param {Array} data.ids -  Массив Id Выбранных Брендов
   */
  async SetMetksBrand({ state, commit, rootGetters, dispatch }, data) {
    const brandsAll = rootGetters["Brand/BrandAll/GetBrand"];
    for (const keyBrandID in data.ids) {
      for (const keyBrand in brandsAll) {
        if (data.ids[keyBrandID] == brandsAll[keyBrand].id) {
          const dataset = await dispatch("_init_Metka", {
            data: brandsAll[keyBrand],
            type: "brand",
          });
          commit("PushMetks", dataset);
          break;
        }
      }
    }
  },
  /**
   * @function SetMetksCategories - Сохраняет все метки Категории
   * @param {Array} data -  Массив с вложенностью
   */
  async SetMetksCategories({ commit, dispatch }, data) {
    for (const key in data) {
      if (data[key].CheckedType === true && data[key].Indeterminate === false) {
        const dataset = await dispatch("_init_Metka", {
          data: data[key],
          type: "categories",
        });
        commit("PushMetks", dataset);
      } else if (
        data[key].Indeterminate === true &&
        data[key].children.length > 0
      ) {
        await dispatch("SetMetksCategories", data[key].children);
      }
    }
  },
  _init_Metka({}, data) {
    const dataset = {};
    dataset.name = data.data.name;
    dataset.id = data.data.id;
    dataset.type = data.type;
    return dataset;
  },
};
export const getters = {
  /**
   * @function  GetMetks - Возвращает всё метки фильтров
   */
  GetMetks: s => s.Metks,
};
