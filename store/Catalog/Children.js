export const mutations  =  {
    SetChildrenAll(store, data){
        if( data.data.childrenAll === undefined){
            data.data.childrenAll = [];
        }
        data.data.childrenAll.push(data.value);
    },
}


export const actions = { 
    CheckChildrenAll({commit, dispatch}, data){
        data.forEach(element => {
            if(element.children.length != 0){
                let childrens = element.children;
                childrens.forEach(children => {
                    commit("SetChildrenAll", {data:element, value: children.id});
                });
                dispatch("CheckChildrenAll", element.children);
            }
        });
        // console.log(data);
    }
}