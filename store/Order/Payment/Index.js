export const state = () => ({
    Payment: ""
})
export const mutations  =  {
    SetPayment(store, data){
        store.Payment = data;
    },
}
export const actions = { 
    async _Payment({store,dispatch, commit, getters}){
        if(getters.GetPayment.length === 0){
            let  data = await dispatch("Order/Payment/axios/_Payment", {} , { root: true });
            commit("SetPayment", data);
        }  
    }
}

  
export const getters = {
    GetPayment: s => s.Payment,
}
