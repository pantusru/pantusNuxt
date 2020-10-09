export const state = () => ({
    /**
     * @property Vuex массив для фильтров select состоящий из массивов
     */
    Panel: [

    ],
    /**
     * @property Последний Id массива в Panel
     */
    Ids: 0,
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
            DataGenerations: [],
        });
    },
    /**
     *  
     * @function  SetPanelNew - Удаляет массив по index в Panel
     */
    DeletePanel(store, data) {
        store.Panel.splice(data, 1);
    },
    /**
     * @function SetPanel - Добавляет Selected или Data в выбранном по id в Panel
     * @param {Number} data.id - id Panel с которым работать  
     * @param {String} data.name - Названия ключа который нужно изменить в Panel
     * @param {Array} data.value -  Значение на которое нужно поменять состояния Panel
     */
    SetPanel(store, data) {
        let index = store.Panel.findIndex(panel => panel.id == data.id);
        store.Panel[index][data.name] = data.value;
    },
    /**
     * @function SetPanel - Очищает Selected и Data в выбранном по id в Panel 
     * @param {Number} data.id - id Panel с которым работать 
     * @param {String} data.NameSelected - Названия ключа Selected который нужно сбросить в Panel
     * @param {String} data.NameSelected - Названия ключа Data который нужно сбросить в Panel
     */
    ResetClildren(store, data) {
        let index = store.Panel.findIndex(panel => panel.id == data.id);
        store.Panel[index][data.NameSelected] = [];
        store.Panel[index][data.NameData] = [];
    },
    /**
     * 
     * @function ResetAll - Очищает все Panels
     */
    ResetAll(store) {
        store.Panel = [
            {
                id: 1,
                SelectedMarka: [],
                SelectedModel: [],
                SelectedGenerations: [],
                DataModel: [],
                DataGenerations: [],
            }
        ]
    },
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
    /**
     * 
     *  @function SetAllIdUrl - Собирает с всех Panel id максимальной вложенности
     * @returns {String}  Строку массива всех выбранных id с Panel
     */
    SetAllIdUrl({ state }) {
        let ids = [];
        state.Panel.forEach(element => {
            // ДОбавить SelectedGenerations
            if (element.SelectedGenerations.length != 0) {
                ids.push(element.SelectedGenerations);
                // ДОбавить SelectedModel
            } else if (element.SelectedModel.length != 0) {
                ids.push(element.SelectedModel);
                // ДОбавить SelectedMarka
            } else if (element.SelectedMarka.length != 0) {
                ids.push(element.SelectedMarka);
            }
        });
        if (ids.length != 0) {
            window.scrollTo(0, 0);
            ids = ids.flat(Infinity);
            ids = Array.from(
                new Set(ids)
            ).join();
            return ids;
        }
    },
    /**
    *  @param data.data  - Массив где искать id 
    *   @param data.id - Массив Id по которым искать
    *  @function SetId_Url -  по Url сохраняет выбранные applicabilities в Panel
    */
    SetId_Url({ dispatch }, data) {
        for (const keyData in data.data) {
            if (data.data[keyData].level == 0) {
                var SelectedMarka = data.data[keyData].id;
            } else if (data.data[keyData].level == 1) {
                var SelectedModel = data.data[keyData].id;
            }
            for (const keyId in data.id) {
                if(data.data[keyData].id == data.id[keyId]){
                    dispatch("SearchPanel", {
                        level: data.data[keyData].level,
                        ids: {
                            Marka: SelectedMarka,
                            Model: SelectedModel,
                        }
                    });
                }
            }
        } 
    },
    /**
     * @param {Number} data.level - Показывает в каких Selected искать 
     * @param {Object} data.ids - id которые нужны 
     */
    SearchPanel({ state, commit }, data) {
        let check = false;
        
        for (const keyPanel in state.Panel) {
            if (check === true) {
                break;
            }
            if(data.level == 0){
                if (data.level == 0) {
                    commit("SetPanelNew");
                    commit("SetPanel",{
                        id: state.Ids,
                        name: "SelectedMarka",
                        value:data.ids.Marka
                    });
                    check = true;
                    break;
                }
            }
            else if (data.level == 1) {
                for (const keySelected in state.Panel[keyPanel].SelectedMarka) {
                    if (data.ids.Marka == state.Panel[keyPanel].SelectedMarka[keySelected]) {
                        check = true;
                        break;
                    }
                }
            }
        }
        if (check === false) {
            if (data.level == 0) {
                commit("SetPanelNew");
                commit("SetPanel",{
                    id: state.Ids,
                    name: "SelectedMarka",
                    value:data.ids.Marka
                });
            }
        }
    }
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