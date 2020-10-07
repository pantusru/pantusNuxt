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
            DataGenerations:[],
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
            DataGenerations:[],
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
    },
    ResetClildren(store, data){
        let index = store.Panel.findIndex(panel => panel.id == data.id);
        store.Panel[index][data.NameSelected] = [];
        store.Panel[index][data.NameData] = [];
    },
    ResetAll(store){
        store.Panel = [
            {
                id: 1,
                SelectedMarka: [],
                SelectedModel: [],
                SelectedGenerations: [],
                DataModel: [],
                DataGenerations:[],
            }
        ]
    }
}

export const actions = {
    /**
     *  
     * @function  DeletePanel - Ищет Index по Id и отправляет в мутацию удаления Panel
     */
    DeletePanel({ store, commit, getters }, id) {
        let index = getters.PanelfindIndex(id);
        commit("DeletePanel", index);
    },
}
export const getters = {
    /**
     * #Вывод всех Panel
     * @returns {Array}  Массив всех Panel
     */
    GetPanel: s => s.Panel,
    /**
     * #Вывод количество Panel
     * @returns {Number}  количество Panel
     */
    PanelLength: s => s.Panel.length,
    /**
     * #Вывод одной Panel по id
     * @returns {Object}  одна Panel
     */
    PanelId: s => id => s.Panel.filter(data => data.id == id)[0],
    /**
     * #Вывод index панели по id
     * @returns {Object}  index Panel
     */
    PanelfindIndex: s => id => s.Panel.findIndex(panel => panel.id == id)
}   