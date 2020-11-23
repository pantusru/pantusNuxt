export const state = () => ({
  NewsCategories: []
});
export const mutations = {
  SetNewsCategories(store, data) {
    store.NewsCategories = data;
  }
};
export const actions = {
  async _NewsCategories({ store, dispatch, commit, getters }) {
    if (getters.GetNewsCategories.length === 0) {
      let data = await dispatch(
        "News/axios/_NewsСategoriesAll",
        {},
        { root: true }
      );
      commit("SetNewsCategories", data);
    }
  }
};
export const getters = {
  GetNewsCategories: s => s.NewsCategories
};

//  Отображает данные всех категории новостей
