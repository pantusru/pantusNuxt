export const state = () => ({
  Products: [],
});
export const mutations = {
  SetProducts(store, data) {
    store.Products = data;
  },
};
export const actions = {
  async _ProductAll({ store, dispatch, commit, getters }) {
    if (getters.GetProducts.length === 0) {
      let data = await dispatch("Products/axios/_Analogs", {}, { root: true });
      commit("SetProducts", data);
    }
  },
};
export const getters = {
  GetProducts: s => s.Products,
};
