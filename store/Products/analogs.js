export const state = () => ({
  Products: [],
});
export const mutations = {
  SetProducts(store, data) {
    store.Products = data;
  },
  ResetProducts(store) {
    store.Products = [];
  },
};
export const actions = {
  async _Analogs({ store, dispatch, commit, getters }, dataset) {
    const product = await dispatch("Products/axios/_AnalogsAxios", dataset, {
      root: true,
    });
    commit("SetProducts", product);
  },
};
export const getters = {
  GetProducts: s => s.Products,
};
