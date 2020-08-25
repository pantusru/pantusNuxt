export const state = () => ({
    Brand: [],
})
export const mutations  =  {
    SetBrand(store, data){
        store.Brand = data;
    }
}
export const actions = { 
    async _Brands({store,dispatch, commit, getters}){
        if(getters.GetBrand.length === 0){
            let  data = await dispatch("Brand/axios/_Brands", {} , { root: true })
            commit("SetBrand", data);
            
        }  
    }
}
export const getters = {
    GetBrand: s => s.Brand,
}

//  Отображает данные всех примянимости товаров