export const state = () => ({
    /**
     * @property Vuex массив для фильтров select состоящий из массивов
     */
    Panel: [
        {
            id: 1,
            Selected: []
        }
    ],
    /**
     * 
     */
    Ids: 1,
})
export const mutations = {
    /**
     *  
     * @function  SetPanelNew - Добавляет новый  пустой массив в Panel
     */
    SetPanelNew(store) {
        store.Ids++;
        store.Panel.push({
            id: store.Ids,
            Selected: [],
        });
    },
    /**
     *  
     * @function  SetPanelNew - Удаляет массив по index в Panel
     */
    DeletePanel(store, data) {
        store.Panel.splice(data, 1);
    },
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