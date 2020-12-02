export const state = () => ({
  Selected: [],
  Loader: false,
});
export const mutations = {
  SetSelected(store, data) {
    store.Selected = data;
  },
  PushSelected(store, data) {
    store.Selected.push(data);
  },
  DeleteSelected(store, data) {
    store.Selected.splice(data, 1);
  },
  LoaderTrue(store) {
    store.Loader = true;
  },
};
export const actions = {
  async _Selected({ store, dispatch, commit, getters }) {
    if (getters.GetLoader === false) {
      let data = await dispatch("Selected/axios/_Product", {}, { root: true });
      commit("SetSelected", data);
      commit("LoaderTrue");
    }
  },
};
export const getters = {
  GetSelected: s => s.Selected,
  GetLoader: s => s.Loader,
};
