export const state = () => ({
    Metks: [
    ],
})
export const mutations  =  {
    /**
     * @param data.link -  Ссылка на данные для добавляемой метки
     * @function ResetMetks - добавляет новую метку
     */
    PushMetks(store, data){
        store.Metks.push(data);
    },
    /**
     * @function ResetMetks - Убирает все метки 
     */
    ResetMetks(store){
        store.Metks= [];
    },
    /**
     * @function  DeleteMetks - Удаляет указанную метку
     * @param {Number} data.index - index Удаляймой метки 
     */
    DeleteMetks(store, data){
        store.Metks.splice(data.index , 1);
    }
}
export const actions = { 
    /**
     * @function SetMetksBrand - Сохраняет все метки Бренда
     * @param {Array} data.ids -  Массив Id Выбранных Брендов 
     */
    SetMetksBrand({commit, rootGetters} , data){
        let brandsAll = rootGetters["Brand/BrandAll/GetBrand"];
        for (const keyBrandID in data.ids) {
            for(const keyBrand in brandsAll){
                if(data.ids[keyBrandID] == brandsAll[keyBrand].id){
                    commit("PushMetks" ,brandsAll[keyBrand]);
                    break;
                }
            }
        }
    },
    /**
     * @function SetMetksBrand - Сохраняет все метки Категории 
     * @param {Array} data -  Массив с вложенностью  
     */
    SetMetksCategories({commit, dispatch} , data){
        for (const key in data) {
            if(data[key].CheckedType == true && data[key].Indeterminate == false){
                console.log("ФЛЕКСА ТОЧКА НЕТ");
                commit("PushMetks" , data[key]);
                continue;
            }
            else if(data[key].Indeterminate == false){
                continue;
            }
            else if(data[key].Indeterminate == true && data[key].children.length){
                dispatch("SetMetksCategories", data[key].children);
            }
        }
    }
}
export const getters = {
    /**
     * @function  GetMetks - Возвращает всё метки фильтров
     */
    GetMetks: s => s.Metks,
}