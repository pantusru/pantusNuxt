export const state = () => ({
    Form:{
        Contact:{
            surname: "",
            name: "",
            telephone: "",
            Town: "",
            TownId: "",
        },
        Checxbox:{
            Payment: "35",
            Dostavka: "",
        },
      costDostavka: 0,

    }
})
export const mutations  =  {
    SetFull(store, data){
        store.Form.Contact[data.name] = data.value;
    },
    SetPayment(store, data){
        store.Form.Checxbox.Payment = data;
    },
  SetDostavka(store, data){
    store.Form.Checxbox.Dostavka = data;
  },
  SetCostDostavka(store, data){
    store.Form.costDostavka = data;
  },
}

export const getters = {
    GetContact: s => s.Form.Contact,
    GetPayment: s => s.Form.Checxbox.Payment,
    GetDostavka: s => s.Form.Checxbox.Dostavka,
    GetCostDostavka: s => s.Form.costDostavka,
}
