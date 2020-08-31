export const state = () => ({
    Categories: [],
})
export const mutations  =  {
    SetCategories(store, data){
        store.Categories = data;
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
}

//  Отображает данные всех категории товаров