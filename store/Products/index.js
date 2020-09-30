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
    async _ProductAll({store,dispatch, commit, getters}){
        if(getters.GetProducts.length === 0){
            let  data = await dispatch("Products/axios/_Product", {} , { root: true });
            commit("SetProducts", data);
        }  
    },
    async _ProductId({store,dispatch, commit, getters}){
        let  data = await dispatch("Products/axios/_ProductId", {} , { root: true });
        commit("SetProduct", data);
    }
}
export const getters = {
    GetProducts: s => s.Products,
    GetProduct: s => s.Product,
    GetProductId: s => id => s.Products.filter(product =>product.ProductCard.id ===  id)[0],
}