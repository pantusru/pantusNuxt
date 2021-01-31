export const state = () => ({
  NewsPage: [],
  NewsVisible: [],
  CountNews: 0,
  limit: 12,
});
export const mutations = {
  SetNewsPage(store, data) {
    store.NewsPage[data.page] = data.dataset;
  },
  SetNewsVisible(store, data) {
    store.NewsVisible = data;
  },
  SetCountNews(store, data) {
    store.CountNews = data;
  },
};
export const actions = {
  async _NewsPage({ store, dispatch, commit, getters }, page) {
    if (page === undefined) {
      // проверка что пришло!
      page = 1;
    }
    if (getters.GetNewsPage[page] === undefined) {
      // данные не загруженны!
      const offets = (page - 1) * getters.GetLimit;
      const data = await dispatch(
        "News/axios/_NewsAll",
        { offets, limit: getters.GetLimit },
        { root: true }
      );
      if (getters.GetCountNews === 0) {
        commit("SetCountNews", data.count);
      }
      const dataset = data;
      commit("SetNewsPage", { dataset, page });
      commit("SetNewsVisible", dataset);
    } else {
      // данные загружены!
      commit("SetNewsVisible", getters.GetNewsPage[page]);
    }
  },
};
export const getters = {
  GetNewsPage: s => s.NewsPage,
  GetNewsVisible: s => s.NewsVisible,
  GetCountNews: s => s.CountNews,
  GetLimit: s => s.limit,
  GetPage: s => {
    if (s.CountNews % s.limit !== 0) {
      return Number(s.CountNews / s.limit) + 1;
    } else {
      return Number(s.CountNews / s.limit);
    }
  },
};

//  отображает новости на главной странице
