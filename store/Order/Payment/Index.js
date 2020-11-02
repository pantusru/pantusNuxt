export const state = () => ({
    Payment: "",
    Dostavka: "",
})
export const mutations  =  {
    SetPayment(store, data){
        store.Payment = data;
    },
  SetDostavka(store, data){
    store.Dostavka = data;
  },
  SetNameDostavka(store, data){
     data.url.description  = data.valueText;
    data.url.cost  = data.valueCons;
  }
}
export const actions = {
    async _Payment({store,dispatch, commit, getters}){
        if(getters.GetPayment.length === 0){
            let  data = await dispatch("Order/axios/_Payment", {} , { root: true });
            commit("SetPayment", data);
        }
    },
  async _Dostavka({store,dispatch, commit, getters}){
    if(getters.GetDostavka.length === 0){
      let  data = await dispatch("Order/axios/_Dostavka", {} , { root: true });
      commit("SetDostavka", data);
    }
  },
}


export const getters = {
    GetPayment: s => s.Payment,
    GetDostavka: s => s.Dostavka,
}
