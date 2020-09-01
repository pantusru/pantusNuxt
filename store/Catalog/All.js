export const actions = { 
    _ChexboxPush({commit, dispatch} , data){ 
        commit("Catalog/Chexbox/SetChecboxCheckedType", {data:data, value: false}, { root: true });
        commit("Catalog/Chexbox/SetChecboxIndeterminate", {data:data, value: false}, { root: true });
    },
    //  ДЕЙСТВИЯ КОТОРЫЕ ВЫЗЫВАЮТ МУТАЦИЮ

    // ДЕЙСТВИЯ КОТОРЫЕ ПЕРЕБИРАЮТ МАССИВ
    _All({commit, dispatch}, data){// первая иницилизация данных!
        data.forEach(element => {
            dispatch("_ChexboxPush", element);
            if(element.children.length != 0){
                dispatch("_All", element.children);
            }
        });
    },
    _AllChexbox({commit, dispatch}, data){ // СБРОСИТЬ Chexbox в false
        data.forEach(element => {
            dispatch("_ChexboxPush", element);
            if(element.children.length != 0){
                dispatch("_All", element.children);
            }
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
        for (const key in dataset) {
            if(dataset[key].children.length != 0){
                await dispatch("_AllChexboxTrue", {data:dataset[key].children, ids:data.ids});
            }   
            else{
                let ids = data.ids;
                for (const keyid in ids) {
                    if(ids[keyid] == dataset[key].id){
                        console.log("ID НАЙДЕН!")
                        commit("Catalog/Chexbox/SetChecboxCheckedType", {data: dataset[key], value: true }, {root: true})
                        // return;
                    }
                }
            }
        };
    }
}