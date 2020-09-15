export const state = () => ({
    Form:{
        Contact:{
            Surname: "",
            Name: "",
            Telephone: "",
            Town: "",
        },
    }
})
export const mutations  =  {
    SetFull(store, data){
        data.data[data.name] = data.value;
    },
}
 
export const getters = {
    GetContact: s => s.Form.Contact,
}
