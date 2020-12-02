export const state = () => ({
  NewsIndex: [],
});
export const mutations = {
  SetNewsIndex(store, data) {
    store.NewsIndex = data;
  },
};
export const actions = {
  async _NewsIndex({ store, dispatch, commit, getters }) {
    if (getters.GetNewsIndex.length === 0) {
      let data = await dispatch(
        "News/axios/_NewsAll",
        { offets: 0, limit: 9 },
        { root: true }
      );
      commit("SetNewsIndex", data.results);
    }
  },
};
export const getters = {
  GetNewsIndex: s => s.NewsIndex,
};

//  отображает новости на главной странице
