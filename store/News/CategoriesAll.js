export const state = () => ({
    NewsCategories: [],
})
export const mutations  =  {
    SetNewsCategories(store, data){
        store.NewsCategories = data;
    }
}
export const actions = { 
    async _NewsCategories({store,dispatch, commit}, id){
        let  data = await dispatch("News/axios/_NewsСategoriesAll", id, { root: true });
        commit("SetNewsCategories", data);
         
    }
}
export const getters = {
    GetNewsCategories: s => s.NewsCategories,
}

//  Отображает данные одной ID на news/id-новости