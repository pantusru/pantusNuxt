export const state = () => ({
  productSale: [],
});
export const mutations = {
  SetProductSale(store, data) {
    store.productSale = data;
  },
};
export const actions = {
  async RequestProductSale({ commit, dispatch }) {
    const dataset = await dispatch("axios/_saleAxios", { root: true });
    commit("SetProductSale", dataset);
  },
};
export const getters = {
  getProductSale: s => s.productSale,
};
