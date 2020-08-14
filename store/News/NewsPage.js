export const state = () => ({
    NewsPage: [],
    NewsVisible:[],
    KovloNews: 0,
    limit:12,
})
export const mutations  =  {
    SetNewsPage(store, data){
        store.NewsPage[data.page] = data.dataset;
    },
    SetNewsVisible(store, data){
        store.NewsVisible = data;
    },
    SetKovloNewws(store, data){
        store.KovloNews = data;
    },
}
export const actions = { 
    async _NewsPage({store,dispatch, commit, getters}, page){
        if(page === undefined){ // проверка что пришло!
            page = 1;
        }
        if(getters.GetNewsPage[page] === undefined){// данные не загруженны!
            let offets = (page - 1) * getters.GetLimit;
            let  data =  await dispatch("News/axios/_NewsAll", {offets:offets, limit: getters.GetLimit}, { root: true });
            if(getters.GetKovloNews === 0){
                commit("SetKovloNewws", data.count);
            }
            let dataset = data.results; 
            commit("SetNewsPage", {dataset: dataset, page: page });
            commit("SetNewsVisible", dataset);
        }else{ // данные загруженны!
            commit("SetNewsVisible", getters.GetNewsPage[page]);
        }
 
    }
}
export const getters = {
    GetNewsPage: s => s.NewsPage, 
    GetNewsVisible: s => s.NewsVisible,
    GetKovloNews: s => s.KovloNews,
    GetLimit: s => s.limit,
    GetPage: s => Number(s.KovloNews / s.limit)
}

//  отображает новости на главной странице