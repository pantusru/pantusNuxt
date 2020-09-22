export const state = () => ({
    Form:{
        Contact:{
            surname: "",
            name: "",
            tlf: "",
            Town: "",
            TownId: "",
        },
        Checxbox:{
            Payment: "35",

        }
    }
})
export const mutations  =  {
    SetFull(store, data){
        data.data[data.name] = data.value;
    },
    SetPayment(store, data){
        store.Form.Checxbox.Payment = data;
    }
}
 
export const getters = {
    GetContact: s => s.Form.Contact,
    GetPayment: s => s.Form.Checxbox.Payment,
}
