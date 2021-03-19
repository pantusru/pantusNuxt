export const state = () => ({
  contacts: [],
  dataContacts: {
    check: false,
    h1: undefined,
  },
});

export const mutations = {
  setDataContactsData(store, data) {
    store.dataContacts.check = true;
    store.dataContacts.h1 = data.h1;
  },
  setContactsAll(store, data) {
    store.contacts = data;
  },
};
export const actions = {
  async actionsContacts({ dispatch, getters, commit }) {
      const data = await dispatch("axios/AxiosContacts");
      commit('setContactsAll', data)
  },
};
export const getters = {
  getContactsAll: s => s.contacts,
  getDataContacts: s => s.dataContacts,
};
