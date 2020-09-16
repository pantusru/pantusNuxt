export const state = () => ({
    FormData:{
        login: 'email',
        name: '',
        surname: '',
        tlf:'',
        patronymic: '',
    }
})
export const mutations  =  {
    SetFull(store, data){
        data.data[data.name] = data.value;
    },
}
export const getters = {
    FormData: s => s.FormData,
}
