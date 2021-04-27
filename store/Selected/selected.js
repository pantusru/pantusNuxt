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
  resetSelected(store) {
    store.Selected = []
    store.Loader = false;
  }
};
export const actions = {
  async _Selected({ store, dispatch, commit, getters }) {
    if (getters.GetLoader === false) {
      const data = await dispatch(
        "Selected/axios/_Product",
        {},
        { root: true }
      );
      commit("SetSelected", data);
      commit("LoaderTrue");
    }
  },
  async _DeleteSelected({ dispatch, commit }, dataset) {
    const data = await dispatch("Selected/axios/_ProductDelete", dataset.id, {
      root: true,
    });
    if (!data.error) {
      commit("DeleteSelected", dataset.index);
    }
  },
  async _AddSelected({ dispatch, commit }, dataset) {
    const data = await dispatch("Selected/axios/_ProductPost", [dataset.id], {
      root: true,
    });
    if (!data.error) {
      commit("PushSelected", dataset.data);
    }
  },
};
export const getters = {
  GetSelected: s => s.Selected,
  GetLoader: s => s.Loader,
};
