export const actions = { 
    _ChexboxAll({commit, dispatch} , data){ // все конфинги в false
        commit("Catalog/Chexbox/SetChecboxCheckedType", {data:data, value: false}, { root: true });
        commit("Catalog/Chexbox/SetChecboxIndeterminate", {data:data, value: false}, { root: true });
        commit("Catalog/Visible/SetAllVisible", {data:data, value: true}, { root: true });
    },
    _ChexboxPush({commit}, data){ // Сбросить checbox  в false
        commit("Catalog/Chexbox/SetChecboxCheckedType", {data:data, value: false}, { root: true });
        commit("Catalog/Chexbox/SetChecboxIndeterminate", {data:data, value: false}, { root: true });
    },
    //  ДЕЙСТВИЯ КОТОРЫЕ ВЫЗЫВАЮТ МУТАЦИЮ

    // ДЕЙСТВИЯ КОТОРЫЕ ПЕРЕБИРАЮТ МАССИВ
    _All({commit, dispatch}, data){// первая иницилизация данных!
        data.forEach(element => {
            dispatch("_ChexboxAll", element);
            if(element.children.length != 0){
                dispatch("_All", element.children);
            }
        });
    },
    _AllChexbox({commit, dispatch}, data){ // Reset and уход с страницы фильты
        data.forEach(element => {
            dispatch("_ChexboxPush", element);
            if(element.children.length != 0){
                dispatch("_AllChexbox", element.children);
            }
        });
    },
    _AllVisible({commit, dispatch}, data){ // Reset visible
        data.forEach(element => {
            commit("Catalog/Visible/SetAllVisible", {data:element, value: true}, { root: true });
        });
    },
    async _AllChexboxId({commit, dispatch}, data){ // Найди ID chexbox у которых checked === true
        let IdChexbox = [];
        for (const key in data) {
            if(data[key].children.length != 0){
                IdChexbox.push( await dispatch("_AllChexboxId", data[key].children));
            }
            else if(data[key].CheckedType === true){
                IdChexbox.push(data[key].id);
            }
        };
        return IdChexbox.flat(Infinity);
    },

    async _AllChexboxTrue({store, commit, dispatch}, data){ // Найди ID с url и сделать ему checked = true
        let dataset = data.data;
        let ids = data.ids;
        for (const keyid in ids) {
            await dispatch("Catalog/Chexbox/ChexboxCheckAll", {arr: dataset, id: ids[keyid], value: true}, {root:true});
        }
    }
}