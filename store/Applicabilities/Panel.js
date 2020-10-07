export const state = () => ({
    /**
     * @property Vuex массив для фильтров select состоящий из массивов
     */
    Panel: [
        [],
    ],
})
export const mutations = {
    /**
     *  
     * @function  SetPanelNew - Добавляет новый  пустой массив в Panel
     */
    SetPanelNew(store) {
        store.Panel.push([]);
    },
    /**
     *  
     * @function  SetPanelNew - Удаляет массив по index в Panel
     */
    DeletePanel(store, data) {
        store.Panel.splice(data, 1);
    },
    SetPanelId(store,data){
        console.log(data);
        data.link = data.data.flat();
    }
}

export const actions = {
    DeletePanel({store, commit, getters}, data) {
        let index = getters.GetPanel.findIndex(panel => panel == data);
        console.log(index);
        commit("DeletePanel", index);
        if (getters.GetPanel.length == 0) {
            commit("SetPanelNew");
        }
    }
}
export const getters = {
    GetPanel: s => s.Panel,
    PanelLength: s => s.Panel.length,
}   