export const state = () => ({
  filter: [],
  product: [],
  countProducts: undefined,
});
export const mutations = {
  SetFilter(store, data) {
    store.filter = data;
  },
  setProduct(store, data) {
    store.product = data;
  },
  setCountProducts(store, data) {
    store.countProducts = data;
  },
};
export const actions = {
  async RequestProduct({ commit, dispatch }, filter) {
    const dataset = await dispatch(
      "Products/axios/_ProductFilter",
      { data: filter, limit: 20 },
      { root: true }
    );
    commit("setCountProducts", dataset.count);
    commit("setProduct", dataset.product);
  },
};
export const getters = {
  getFilter: s => s.filter,
  getProduct: s => s.product,
  getCountProducts: s => s.countProducts,
};
