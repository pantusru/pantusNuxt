export const state = () => ({
    NewsId: [],
})
export const mutations  =  {
    SetNewsId(store, data){
        store.NewsId = data;
    }
}
export const actions = { 
    async _NewsId({store,dispatch, commit}, id){
        let  data = await dispatch("News/axios/_NewsAll", id, { root: true });
        commit("SetNewsId", data);
         
    }
}
export const getters = {
    GetNewsId: s => s.NewsId,
}

//  Отображает данные одной ID на news/id-новости