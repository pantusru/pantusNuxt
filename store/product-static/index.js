export const state = () => ({
  filter: [],
  product: [],
});
export const mutations = {
  SetFilter(store, data) {
    store.filter = data;
  },
  setProduct(store, data) {
    store.product = data;
  },
};
export const actions = {
  async RequestProduct({ commit, dispatch }, filter) {
    const data = await dispatch(
      "Products/axios/_ProductFilter",
      { data: filter, limit: 20 },
      { root: true }
    );
    commit("setProduct", data);
  },
};
export const getters = {
  getFilter: s => s.filter,
  getProduct: s => s.product,
};
