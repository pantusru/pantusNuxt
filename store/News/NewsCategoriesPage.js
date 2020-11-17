export const state = () => ({
    NewsCategoriesPage: {},
    NewsVisible:[],
    CountNews: 0,
    limit:12,
})
export const mutations  =  {
    SetNewsCategoriesPage(store, data){
        if(store.NewsCategoriesPage[data.name] === undefined){ // ЕСЛИ данной категории нету
            store.NewsCategoriesPage[data.name] = [];
            store.NewsCategoriesPage[data.name][data.page] = data.dataset;
        }else{// ЕСЛИ данная категории есть но нету пагинации
            store.NewsCategoriesPage[data.name][data.page] = data.dataset;
        }
    },

    SetNewsVisible(store, data){
        store.NewsVisible = data;
    },
    SetCountNewws(store, data){
        store.CountNews = data;
    },
}
export const actions = {
    async _NewsCategoriesPage({store,dispatch, commit, getters}, data){
        let load = false;
        if(data.page === undefined){ // проверка пагинации !
            data.page = 1;
        }
        // ПРОВЕРКА ДАННЫХ НА НАЛИЧИЕ!!
        if(getters.GetNewsCategoriesPage[data.id] === undefined){
            load = true;
        }else if(getters.GetNewsCategoriesPage[data.id][data.page] === undefined){
            load = true;
        }
        // ПРОВЕРКА ДАННЫХ НА НАЛИЧИЕ!!
        if(load){
            let offets = (data.page - 1) * getters.GetLimit;
            let  dataset =  await dispatch("News/axios/_CategoriesNews", {id: data.id, offets:offets, limit: getters.GetLimit}, { root: true });
            commit("SetCountNewws", dataset[0].category.amount_news); // ИЗМЕНИТЬ КОГДА АНДРЕЙ ПОФИКсИТ!
            commit("SetNewsCategoriesPage", {dataset: dataset, page: data.page , name:data.id});
            commit("SetNewsVisible", dataset);
        }else{ // данные загруженны!
            commit("SetNewsVisible", getters.GetNewsCategoriesPage[data.id][data.page]);
        }

    }
}
export const getters = {
    GetNewsCategoriesPage: s => s.NewsCategoriesPage,
    GetNewsVisible: s => s.NewsVisible,
    GetCountNews: s => s.CountNews,
    GetLimit: s => s.limit,
    GetPage: s => {
        if(s.CountNews % s.limit != 0){
            return Number(s.CountNews / s.limit) + 1
        }else{
            return Number(s.CountNews / s.limit)
        }
    }
}

//  отображает новости на главной странице
