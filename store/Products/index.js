export const state = () => ({
  products: [],
  countProducts: 0,
  product: [],
});
export const mutations = {
  SetProducts(store, data) {
    store.products = data;
  },
  SetProduct(store, data) {
    store.product = data;
  },
  SetCountPage(store, data) {
    store.countProducts = data;
  },
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
  async _ProductId({ store, dispatch, commit }, id) {
    const dataset = await dispatch("Products/axios/_ProductId", id, {
      root: true,
    });
    commit("SetProduct", dataset);
  },
};
export const getters = {
  GetProducts: s => s.products,
  GetProduct: s => s.product,
  GetCountProducts: s => s.countProducts,
};
