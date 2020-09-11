export const state = () => ({
    ProductPopual: [],
})
export const mutations  =  {
    SetProductPopual(store, data){
        store.ProductPopual = data;
    }
}
export const actions = { 
    async _ProductPopual({store,dispatch, commit, getters}){
        if(getters.GetProductPopual.length === 0){
            let  data = await dispatch("Products/axios/_Product", {} , { root: true });
            commit("SetProductPopual", data);
        }  
    }
}
export const getters = {
    GetProductPopual: s => s.ProductPopual,
}