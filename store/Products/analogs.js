export const state = () => ({
  Products: [],
});
export const mutations = {
  SetProducts(store, data) {
    store.Products = data;
  },
};
export const actions = {
  async _abcp_Analogs({ store, dispatch, commit, getters }, dataset) {
    const data = await dispatch("Products/abcp/_Analogs", dataset, {
      root: true,
    });
    if (data.length > 0) {
      const product = await dispatch("Products/axios/_AnalogsAxios", data, {
        root: true,
      });
      commit("SetProducts", product);
    }
  },
};
export const getters = {
  GetProducts: s => s.Products,
};
