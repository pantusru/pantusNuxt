export const state = () => ({
    Categories: [],
    Flag: false,
})
export const mutations  =  {
    SetCategories(store, data){
        store.Categories = data;
    },
    SetFlag(store, data){
        store.Flag = data; 
    }
}
export const actions = { 
    async _Categories({store,dispatch, commit, getters}){
        if(getters.GetCategories.length === 0){
            let  data = await dispatch("Categories/axios/_CategoriesStrAll", {} , { root: true });
            dispatch("Catalog/All/_All" , data,{ root: true });
            commit("SetCategories", data);
        }  
    }
}
export const getters = {
    GetCategories: s => s.Categories,
    GetFlag: s=> s.Flag,
}

//  Отображает данные всех категории товаров