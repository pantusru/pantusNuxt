export const state = () => ({
    Products: [],
    product:[],
})
export const mutations  =  {
    SetProducts(store, data){
        store.Products = data;
    },
    SetProduct(store, data){
        store.Product = data;
    },
}
export const actions = { 
    async _ProductAll({store,dispatch, commit, getters} , data){
        // if(getters.GetProducts.length === 0){
            let dataset = await dispatch("Products/axios/_ProductFilter", {data} , { root: true }); 
            commit("SetProducts", dataset);
        // }  
    },
    async _ProductId({store,dispatch, commit, getters}){
        let  data = await dispatch("Products/axios/_ProductId", {} , { root: true });
        commit("SetProduct", data);
    }
}
export const getters = {
    GetProducts: s => s.Products,
    GetProduct: s => s.Product,
}