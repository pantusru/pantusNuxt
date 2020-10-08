export const state = () => ({
    /**
     * @property Vuex массив всех приминимостей
     */
    Applicabilities: [],
})
export const mutations  =  {
    /**
     * #Сохраняет в Vuex приминимости
     * @param {Array} data - Массив полученный из API
     */
    SetApplicabilities(store, data){
        store.Applicabilities = data;
    },
}
export const actions = { 
    /**
     * #Запрос на получения приминимостей
     * @function  _Applicabilitiess проверка на наличие, запрос, сохранения в vuex
     */
    async _Applicabilitiess({store,dispatch, commit, getters}){
        if(getters.GetApplicabilities.length === 0){
            let  data = await dispatch("Applicabilities/axios/_Applicabilities", {} , { root: true }); // ПОлучить данные
            // dispatch("Catalog/All/_All" , data,{ root: true }); //  Обработка данных в нужную структуру
            commit("SetApplicabilities", data);
            
        }  
    }
}
export const getters = {
    /**
     * #Вывод всех приминимостей
     * @returns {Array}  Массив всех приминимостей
     */
    GetApplicabilities: s => s.Applicabilities,
}

 