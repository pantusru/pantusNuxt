export const state = () => ({
    Selected: [],
})
export const mutations  =  {
    SetSelected(store, data){
        store.Selected = data;
    }
}
export const actions = { 
    async _Selected({store,dispatch, commit, getters}){
        if(getters.GetSelected.length === 0){
            let  data = await dispatch("Selected/axios/_Product", {} , { root: true });
            commit("SetSelected", data);
        }  
    }
}
export const getters = {
    GetSelected: s => s.Selected,
}