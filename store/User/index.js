export const state = () => ({
    Loader: false,
    FormData:{
        id: '',
        login: '',
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
    SetAll(store, data){
        store.FormData = data;
    },
    LoaderTrue(store){
        store.Loader = true;
    },
}
export const actions = { 
    async _User({store,dispatch, commit, getters}){
        if(getters.Loader === false){
            let  data = await dispatch("User/axios/_User", {} , { root: true });
            commit("SetAll", data);
            commit("LoaderTrue");
        }  
    }
}
export const getters = {
    FormData: s => s.FormData,
    Loader: s => s.Loader,
}
