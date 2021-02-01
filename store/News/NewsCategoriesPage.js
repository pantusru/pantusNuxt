export const state = () => ({
  NewsCategoriesPage: {},
  NewsVisible: [],
  CountNews: 0,
  limit: 12,
});
export const mutations = {
  SetNewsCategoriesPage(store, data) {
    if (store.NewsCategoriesPage[data.name] === undefined) {
      // ЕСЛИ данной категории нету
      store.NewsCategoriesPage[data.name] = [];
      store.NewsCategoriesPage[data.name][data.page] = data.dataset;
    } else {
      // ЕСЛИ данная категории есть но нету пагинации
      store.NewsCategoriesPage[data.name][data.page] = data.dataset;
    }
  },

  SetNewsVisible(store, data) {
    store.NewsVisible = data;
  },
  SetCountNewws(store, data) {
    store.CountNews = data;
  },
};
export const actions = {
  async _NewsCategoriesPage({ store, dispatch, commit, getters }, data) {
    if (data.page === undefined) {
      // проверка пагинации !
      data.page = 1;
    }
    const dataset = await dispatch(
      "News/axios/_CategoriesNews",
      { id: data.id, offets: data.page, limit: getters.GetLimit },
      { root: true }
    );
    const count = await dispatch("News/axios/_NewsCategoriesCount", data.id, {
      root: true,
    });
    console.log(count);
    commit("SetCountNewws", count);
    // console.log(data);
    // commit("SetNewsCategoriesPage", {
    //   dataset,
    //   page: data.page,
    //   name: data.id,
    // });
    commit("SetNewsVisible", dataset);
  },
};
export const getters = {
  GetNewsCategoriesPage: s => s.NewsCategoriesPage,
  GetNewsVisible: s => s.NewsVisible,
  GetCountNews: s => s.CountNews,
  GetLimit: s => s.limit,
  GetPage: s => {
    const data = Math.ceil(s.CountNews / s.limit);
    if (data === 0) {
      return 1;
    } else {
      return data;
    }
  },
};

//  отображает новости на главной странице
