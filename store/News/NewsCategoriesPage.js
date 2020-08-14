export const state = () => ({
    NewsCategoriesPage: [],
    NewsVisible:[],
    KovloNews: 0,
    limit:12,
})
export const mutations  =  {
    SetNewsCategoriesPage(store, data){
        store.NewsCategoriesPage[data.page] = data.dataset;
    },
    SetNewsVisible(store, data){
        store.NewsVisible = data;
    },
    SetKovloNewws(store, data){
        store.KovloNews = data;
    },
}
export const actions = { 
    async _NewsCategoriesPage({store,dispatch, commit, getters}, data){
        if(data.page === undefined){ // проверка что пришло!
            data.page = 1;
        }
        if(getters.GetNewsCategoriesPage[data.page] === undefined){// данные не загруженны!
            let offets = (data.page - 1) * getters.GetLimit;
            let  dataset =  await dispatch("News/axios/_CategoriesNews", {id: data.id, offets:offets, limit: getters.GetLimit}, { root: true });
            commit("SetKovloNewws", dataset[0].category.amount_news); // ИЗМЕНИТЬ КОГДА АНДРЕЙ ПОФИКсИТ!
            commit("SetNewsCategoriesPage", {dataset: dataset, page: data.page });
            commit("SetNewsVisible", dataset);
        }else{ // данные загруженны!
            commit("SetNewsVisible", getters.GetNewsCategoriesPage[data.page]);
        }
 
    }
}
export const getters = {
    GetNewsCategoriesPage: s => s.NewsCategoriesPage, 
    GetNewsVisible: s => s.NewsVisible,
    GetKovloNews: s => s.KovloNews,
    GetLimit: s => s.limit,
    GetPage: s => Number(s.KovloNews / s.limit) + 1
}

//  отображает новости на главной странице