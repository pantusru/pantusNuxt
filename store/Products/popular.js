export const state = () => ({
  productsPopular: [],
});
export const mutations = {
  SetProductsPopular(store, data) {
    store.productsPopular = data;
  },
};
export const actions = {
  async _ProductPopularAll({ store, dispatch, commit, getters }, data) {
    if (getters.GetProductsPopular.length === 0) {
      const dataset = await dispatch(
        "Products/axios/_ProductPopularFilter",
        { data, limit: 25 },
        { root: true }
      );
      commit("SetProductsPopular", dataset);
    }
  },
};
export const getters = {
  GetProductsPopular: s => s.productsPopular,
};
