// import Vue from 'vue'

export const state = () => ({
    CartProduct: [],
    CheckCartCount: null,
})
export const mutations  =  {
    SetCartProduct(store, data){
        store.CartProduct = data;
    },
    SetCheckCartCount(store, data){
        store.CheckCartCount = data;
    },
    SetKolvoProduct(store, data){
        store.CartProduct[data.index].kolvo = data.value;
        // Vue.set(store.CartProduct[data.index] , 'kolvo' , data.value);
    },
    PushCartProduct(store, data){
        store.CartProduct.unshift(data);
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
    GetCheckCartCount: s=> s.CheckCartCount,
    // GetCartProduct_offersId: (s) => (id) =>{
    //     return s.CartProduct.find(cart => cart.ProductOffer.id == id);
    // },
    GetCartProduct_offersIndex: (s) => (id) =>{
        return s.CartProduct.findIndex(cart => cart.ProductOffer.id == id);
    }
}