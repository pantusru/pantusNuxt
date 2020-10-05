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
        id: undefined,
        login: undefined,
        name: undefined,
        surname: undefined,
        tlf:undefined,
        patronymic: undefined,
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
