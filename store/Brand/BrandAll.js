export const state = () => ({
  /**
   * @property массив всех брендов
   */
  Brand: [],
  BrandId: {},
  /**
   * @property количество брендов на 1 странице
   */
  limit: 100,
});
export const mutations = {
  /**
   * #Сохраняет в Vuex бренды
   * @param {Array} data - Массив полученный из API
   */
  SetBrand(store, data) {
    store.Brand = data;
  },
  SetBrandId(store, data) {
    store.BrandId = data;
  },
};
export const actions = {
  /**
   * #Запрос на получения брендов
   * @function  _Brands проверка на наличие, запрос, сохранения в vuex
   */
  async _Brands({ store, dispatch, commit, getters }) {
    if (getters.GetBrand.length === 0) {
      const data = await dispatch("Brand/axios/_Brands", {}, { root: true });
      commit("SetBrand", data);
    }
  },
  async _BrandId({ state, dispatch, commit, getters }, id) {
    const dataset = state.Brand.filter(data => data.code === id);
    if (dataset.length !== 0) {
      const data = await dispatch("Brand/axios/_BrandsId", dataset[0].id, {
        root: true,
      });
      commit("SetBrandId", data);
    } else {
      // router 404
    }
  },
};
export const getters = {
  /**
   * #Вывод всех  брендов
   * @returns {Array}  Массив всех брендов
   */
  GetBrand: s => s.Brand,
  /**
   * #Вывод брендов по пагинации
   * @param {Number} id - номер пагинации страниц
   * @return {Array} массив брендов
   */
  GetBrandPage: s => id => s.Brand.slice((id - 1) * s.limit, s.limit * id),
  /**
   * #Запрос на получения брендов
   * @return {Number} количество пагинации на странице бренды
   */
  GetBrandLength: s => {
    return Math.ceil(s.Brand.length / s.limit);
  },
  GetBrandId: s => s.BrandId,
};
