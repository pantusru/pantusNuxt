export const state = () => ({
    NewsPage: [],
    NewsVisible:[],
    KovloNews: 0,
    limit:12,
})
export const mutations  =  {
    SetNewsPage(store, data){
        store.NewsIndex[page.page] = data.dataset;
    }
}
export const actions = { 
    async _NewsIndex({store,dispatch, commit}, page = 1){
        let offets = page * store.limit;
        let  data =  await dispatch("News/axios/_NewsAll", {offets:offets, limit:store.limit}, { root: true });
        commit("SetNewsIndex", {dataset: data, page: page });
         
    }
}
export const getters = {
    GetNewsIndex: s => s.NewsIndex,
}

//  отображает новости на главной странице