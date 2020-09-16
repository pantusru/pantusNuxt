export const state = () => ({
    FormData:{
        login: '',
        name: '',
        surname: '',
        tlf:'',
        patronymic: '',
    }
})

export const getters = {
    FormData: s => s.Form.FormData,
}
