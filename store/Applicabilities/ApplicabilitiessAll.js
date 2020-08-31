export const state = () => ({
    Applicabilities: [],
})
export const mutations  =  {
    SetApplicabilities(store, data){
        store.Applicabilities = data;
    }
}
export const actions = { 
    async _Applicabilitiess({store,dispatch, commit, getters}){
        if(getters.GetApplicabilities.length === 0){
            let  data = await dispatch("Applicabilities/axios/_Applicabilities", {} , { root: true }); // ПОлучить данные
            dispatch("Catalog/All/_All" , data,{ root: true }); //  Обработка данных в нужную структуру
            commit("SetApplicabilities", data);
            
        }  
    }
}
export const getters = {
    GetApplicabilities: s => s.Applicabilities,
}

//  Отображает данные всех примянимости товаров