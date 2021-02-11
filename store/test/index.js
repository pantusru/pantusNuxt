export const state = () => ({
  test: undefined,
});
export const mutations = {
  Settest(store, data) {
    store.test = data;
  },
};
export const actions = {
  actionstest({ commit }) {
    const data = `<nuxt-link to="/">1234</nuxt-link>`;
    commit("Settest", data);
  },
};
export const getters = {
  gettest: s => s.test,
};
