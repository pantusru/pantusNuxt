export const state = () => ({
    Products: [],
})
export const mutations  =  {
    SetProducts(store, data){
        store.Products = data;
    }
}
export const actions = { 
    async _ProductAll({store,dispatch, commit, getters}){
        if(getters.GetProducts.length === 0){
            let  data = await dispatch("Products/axios/_Product", {} , { root: true });
            commit("SetProducts", data);
        }  
    }
}
export const getters = {
    GetProducts: s => s.Products,
    GetProductId: s => id => s.Products.filter(product =>product.ProductCard.id ===  id)[0],
}