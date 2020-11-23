export const state = () => ({
  products: [],
  product: []
});
export const mutations = {
  SetProducts(store, data) {
    store.products = data;
  },
  SetProduct(store, data) {
    store.product = data;
  }
};
export const actions = {
  async _ProductAll({ store, dispatch, commit, getters }, data) {
    // if(getters.GetProducts.length === 0){
    const dataset = await dispatch(
      "Products/axios/_ProductFilter",
      { data, limit: 10 },
      { root: true }
    );
    commit("SetProducts", dataset);
    // }
  },
  async _ProductId({ store, dispatch, commit, getters }) {
    const data = await dispatch(
      "Products/axios/_ProductId",
      {},
      { root: true }
    );
    commit("SetProduct", data);
  }
};
export const getters = {
  GetProducts: s => s.products,
  GetProduct: s => s.product
};
