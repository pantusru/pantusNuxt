export const state = () => ({
  brandCarouser: [],
});
export const mutations = {
  setBrandCarouser(store, data) {
    store.brandCarouser = data;
  },
};
export const actions = {
  async actionBrandCarouser({ commit }) {
    const data = await this.$axios.$get(
      `${process.env.api}/product_brands/carousel`
    );
    commit("setBrandCarouser", data);
  },
};
export const getters = {
  getBrandCarouser: s => s.brandCarouser,
};
