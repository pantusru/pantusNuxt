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
  actionsContacts({ dispatch, getters }) {
    if (getters.getContactsAll.length === 0) {
      dispatch("axios/AxiosContacts");
    }
  },
};
export const getters = {
  getContactsAll: s => s.contacts,
  getDataContacts: s => s.dataContacts,
};
