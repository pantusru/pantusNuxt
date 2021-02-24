export const state = () => ({
  certificates: [],
});
export const mutations = {
  setCertificates(store, data) {
    store.certificates = data;
  },
};
export const actions = {
  async actionCertificates({ commit, dispatch, getters }) {
    if (getters.getCertificates.length === 0) {
      const data = await dispatch("axios/_Certificates");
      commit("setCertificates", data);
    }
  },
};
export const getters = {
  getCertificates: s => s.certificates,
};
