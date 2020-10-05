export const state = () => ({
    /**
     * @property Проверка был ли загружен user
     */
    Loader: false,
    /**
     * @property  Проверка user авторизованный?
     */
    CheckUser: true,
    /**
     * ### Используется в форме Личные данные
     *  
     * @property  Массив данных user
     * 
     */
    FormData:{
        id: '',
        login: "",
        name: "",
        surname: "",
        tlf:"",
        patronymic: "",
    }
})
export const mutations  =  {
    SetFull(store, data){
        console.log(data);
        store.FormData[data.name] = data.value;
    },
    SetAll(store, data){
        store.FormData = data;
    },
    LoaderTrue(store){
        store.Loader = true;
    },
}
export const actions = { 
    async _User({store,dispatch, commit, getters}){ // СПОРНОЕ РЕШЕНИЕ
        if(getters.Loader === false){ // IF пользователь не загружен и есть токен Авторизации  (???)
            let  data = await dispatch("User/axios/_User", {} , { root: true });
            commit("SetAll", data);
            commit("LoaderTrue");
        }  
    }
}
export const getters = {
    FormData: s => s.FormData,
    Loader: s => s.Loader,
    CheckUser: s=> s.CheckUser,
}
