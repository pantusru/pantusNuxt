export const state = () => ({
    MyOrder: [],
})
export const mutations  =  {
    SetMyOrder(store, data){
        store.MyOrder = data;
    },
}
export const actions = { 
    async _MyOrderAll({store,dispatch, commit, getters}){
        if(getters.GetMyOrder.length === 0){
            let  data = await dispatch("MyOrder/axios/_MyOrder", {} , { root: true });
            commit("SetMyOrder", data);
        }  
    },
}
export const getters = {
    GetMyOrder: s => s.MyOrder,
}