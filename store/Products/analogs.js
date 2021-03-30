export const state = () => ({
  Products: [],
});
export const mutations = {
  SetProducts(store, data) {
    store.Products = data;
  },
};
export const actions = {
  async _ProductAll({ store, dispatch, commit, getters }, dataset) {
    const data = await dispatch("Products/abcp/_Analogs", dataset, {
      root: true,
    });
    commit("SetProducts", data);
  },
};
export const getters = {
  GetProducts: s => s.Products,
};
