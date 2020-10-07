export const state = () => ({
    /**
     * @property Vuex массив для фильтров select состоящий из массивов
     */
    Panel: [
        {
            id: 1,
            SelectedMarka: [],
            SelectedModel: [],
            SelectedGenerations: [],
            DataModel: [],
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
            SelectedMarka: [],
            SelectedModel: [],
            SelectedGenerations: [],
            DataModel: [],
        });
    },
    /**
     *  
     * @function  SetPanelNew - Удаляет массив по index в Panel
     */
    DeletePanel(store, data) {
        store.Panel.splice(data, 1);
    },
    SetPanel(store, data) {
        let index = store.Panel.findIndex(panel => panel.id == data.id);
        store.Panel[index][data.name] = data.value;
    }
}

export const actions = {
    DeletePanel({ store, commit, getters }, id) {
        let index = getters.PanelfindIndex(id);
        commit("DeletePanel", index);
    },
}
export const getters = {
    GetPanel: s => s.Panel,
    PanelLength: s => s.Panel.length,
    PanelId: s => id => s.Panel.filter(data => data.id == id),
    PanelfindIndex: s => id => s.Panel.findIndex(panel => panel.id == id)
}   