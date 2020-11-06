export const actions = {
        /**
        * #Иницилизациия данных
        * @function _ChexboxAll - Добавляет элементу массива свойства CheckedType, Indeterminate, visible
        * @param {Array} data. - ссылка на элемент
        */
    _ChexboxAll({commit, dispatch} , data){ // all config в default
        // if(data.TopParent == undefined && data.parentId != undefined){
        //     commit("Catalog/Chexbox/SetChecboxTopParent", {data:data, value: data.parentId}, { root: true });
        // }else{
        //     commit("Catalog/Chexbox/SetChecboxTopParent", {data:data, value: data.TopParent}, { root: true });
        // }
        commit("Catalog/Chexbox/SetChecboxCheckedType", {data:data, value: false}, { root: true });
        commit("Catalog/Chexbox/SetChecboxIndeterminate", {data:data, value: false}, { root: true });
        commit("Catalog/Visible/SetAllVisible", {data:data, value: true}, { root: true});
    },
    /**
    * #Сброс data chexbox
    * @function _ChexboxPush - свойствам CheckedType, Indeterminate, задает значения false
    * @param {Array} data - ссылка на элемент
    */
    _ChexboxPush({commit}, data){ // Сбросить checbox  в false
        commit("Catalog/Chexbox/SetChecboxCheckedType", {data:data, value: false}, { root: true });
        commit("Catalog/Chexbox/SetChecboxIndeterminate", {data:data, value: false}, { root: true });
    },
    //  ДЕЙСТВИЯ КОТОРЫЕ ВЫЗЫВАЮТ МУТАЦИЮ

    // ДЕЙСТВИЯ КОТОРЫЕ ПЕРЕБИРАЮТ МАССИВ
    /**
    * #прогоняет массив добавляя элементам доб свойства
    * @function _All -  доб свойства: CheckedType, Indeterminate, visible
    * @param {Array} data - массив фильтров с вложенностью
    */
    // _All({commit, dispatch}, data){// первая иницилизация данных!
    //     data.forEach(element => {
    //         dispatch("_ChexboxAll", element);
    //         if(element.children.length != 0){
    //             dispatch("_All", element.children);
    //         }
    //     });
    // },
    /**
    * #прогоняет массив сбрасывая свойства элементам
    * @function _AllChexbox -  свойствам: CheckedType, Indeterminate  задает значения false
    * @param {Array} data - массив фильтров с вложенностью
    */
    _AllChexbox({commit, dispatch, getters}, data){ // Reset and уход с страницы фильты
        data.forEach(element => {
            dispatch("_ChexboxPush", element);
            if(element.children.length != 0){
                dispatch("_AllChexbox", element.children);
            }
        });
    },
    /**
    * #прогоняет массив сбрасывая свойства элементам
    * @function _AllVisible -  свойствам: visible  задает значения true
    * @param {Array} data - массив фильтров
    */
    _AllVisible({commit, dispatch}, data){ // Reset visible
        data.forEach(element => {
            commit("Catalog/Visible/SetAllVisible", {data:element, value: true}, { root: true });
            if(element.children.length != 0){
                dispatch("_AllVisible", element.children);
            }
        });
    },
    /**
    * #прогоняет массив и ищет свойство CheckedType == true
    * @param {Array} data - массив фильтров c вложенностью
    * @returns {Array} Массив ID у который стоит chexbox
    */
    async _AllChexboxId({commit, dispatch}, data){ // Найди ID chexbox у которых checked === true
        let IdChexbox = [];
        for (const key in data) {
            if(data[key].children.length != 0){
                IdChexbox.push(await dispatch("_AllChexboxId", data[key].children));
            }
            else if(data[key].CheckedType === true){
                IdChexbox.push(data[key].id);
            }
        };
        return IdChexbox.flat(Infinity);
    },
    /**
    * #прогоняет массив и ищет свойство id == data.ids
    * @function _AllChexboxTrue - Выставляет всё фильтры по url адресу
    * @param {Array} data.data - массив фильтров c вложенностью
    * @param {Array} data.ids - Массив ID у который стоит chexbox
    */
    async _AllChexboxTrue({store, commit, dispatch, getters}, data){ // Найди ID с url и сделать ему checked = true
        // Педелелать в другую функцию
        let dataset = data.data;
        let ids = data.ids;
        await dispatch("Catalog/Chexbox/ChexboxCheckAll", {arr: dataset, id: ids, value: true}, {root:true});
    }
}
