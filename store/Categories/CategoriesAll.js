export const state = () => ({
  /**
   * @property Массив всех категории
   */
  Categories: []
});
export const mutations = {
  /**
   * @param {Array} data - Массив всех категории
   * @function  SetCategories - Сохраняет все категории с API
   */
  SetCategories(store, data) {
    store.Categories = data;
  }
};
export const actions = {
  /**
   * #Запрос на получения всех категории
   * @function  _Categories проверка на наличие, запрос, сохранения в vuex
   */
  async _Categories({ store, dispatch, commit, getters }) {
    if (getters.GetCategories.length === 0) {
      let data = await dispatch(
        "Categories/axios/_CategoriesStrAll",
        {},
        { root: true }
      );
      // dispatch("Catalog/All/_All" , data,{ root: true });
      commit("SetCategories", data);
    }
  }
};
export const getters = {
  /**
   * @function GetCategories - Возвращает все категории
   */
  GetCategories: s => s.Categories,
  // GetCategoriesId: s=> id => s.CartProduct.filter(cart => cart.ProductOffer.id == id),
  GetCategoriesId: s => id => s.Categories.filter(todo => todo.id == id)
};

//  Отображает данные всех категории товаров
