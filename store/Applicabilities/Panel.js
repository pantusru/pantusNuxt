export const state = () => ({
    /**
     * @property Vuex массив для фильтров select состоящий из массивов
     */
    Panel: [
        {
            id: 1,
            SelectedMarka:[],
            SelectedModel: [],
            SelectedGenerations:[],
        }
    ],
    /**
     * @property Последний Id массива в Panel
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
            SelectedMarka:[],
            SelectedModel: [],
            SelectedGenerations:[],
        });
    },
    /**
     *  
     * @function  SetPanelNew - Удаляет массив по index в Panel
     */
    DeletePanel(store, data) {
        store.Panel.splice(data, 1);
    },
    SetIdPanel(store,data){
        store.Panel[data.index][data.name] = data.data;
    }
}

export const actions = {
    DeletePanel({store, commit, getters}, id) {
        let index = getters.PanelfindIndex(id);
        commit("DeletePanel", index);
        if (getters.GetPanel.length == 0) {
            commit("SetPanelNew");
        }
    },
    SetIdPanel({store,commit,getters}, data){
        let index = getters.PanelfindIndex(data.id);
        console.log(index);
        commit("SetIdPanel", {index:index, data: data.data ,name:data.name});   
    }
}
export const getters = {
    GetPanel: s => s.Panel,
    PanelLength: s => s.Panel.length,
    PanelId: s=> id => s.Panel.filter(data => data.id == id),
    PanelfindIndex: s=> id => s.Panel.findIndex(panel => panel.id == id)
}   