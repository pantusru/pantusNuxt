export const mutations  =  {
    SetVisible(store, data){
        data.data.visible = data.value;
    },
}


export const actions = { 
    CheckSetVisible({commit, dispatch}, data){
        data.forEach(element => {
            commit("SetVisible", {data:element, value:true});
            if(element.children !== null){
                dispatch("CheckSetVisible", element.children)
            } 
        });
    }
}