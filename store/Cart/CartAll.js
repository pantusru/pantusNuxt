export const state = () => ({
    CartProduct: [],
})
export const mutations  =  {
    SetCartProduct(store, data){
        store.CartProduct = data;
    },
    SetKolvoProduct(store, data){
        // console.log(data);
        data.data.kolvo = data.value;
    },
    DeleteCartProduct(store, data){
        store.CartProduct.splice(data, 1);             
    }
}
export const actions = { 
    async _CartProduct({store,dispatch, commit, getters}){
        if(getters.GetCartProduct.length === 0){
            let  data = await dispatch("Cart/axios/_CartProduct", {} , { root: true });
            commit("SetCartProduct", data);
        }  
    }
}
export const getters = {
    GetCartProduct: s => s.CartProduct,
}