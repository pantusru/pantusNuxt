export const actions = {
    /**
     * 
     * @param {Array} data.data - Массив где осуществляется поиск id
     * @param {Array} data.id  - Массив где находятся id с url 
     * @param {Number} data.MarkId  - id марки у  текущей приминимости
     * @param {Array} data.DataModel  - Массив потомков модели одной марки
     * @param {Array} data.DataGenerations  - Массив потомков модели одной М
     */
    SetId_Url({ dispatch }, data) {
        // ПРОГОНЯЕМ ПРИМИНИМОСТИ
        for (let keyData in data.data) {
            if (data.data[keyData].level === 0) {
                data.DataModel = data.data[keyData].children
            } else if (data.data[keyData].level === 1) {
                data.MarkId = data.data[keyData].parentId;
                data.DataGenerations = data.data[keyData].children;
            }
            // ПРогоняем ID с URL
            for (let keyId in data.id) {
                if (data.data[keyData].id == data.id[keyId]) {// СОвпадение найдено
                    if (data.data[keyData].level == 0) {// Приминимость 0 уровня
                        dispatch("MarkaSet", {
                            link: data.data[keyData],
                        })
                    }
                    else if (data.data[keyData].level == 1) {// Приминимость 1 уровня
                        dispatch("ModelSet", {
                            link: data.data[keyData],
                            DataModel: data.DataModel,
                        })
                    } else if (data.data[keyData].level == 2) {// Приминимость 2 уровня
                        dispatch("GenerationsSet", {
                            DataModel: data.DataModel,
                            MarkId: data.MarkId,
                            link: data.data[keyData],
                            DataGenerations:data.DataGenerations
                        })
                    }
                    break;
                }
            }
            if (data.data[keyData].children.length !== 0) { // У данной приминимости есть Потомки?
                dispatch("SetId_Url", {
                    data: data.data[keyData].children,
                    id: data.id,
                    MarkId: data.MarkId,
                    DataModel: data.DataModel,
                    DataGenerations: data.DataGenerations
                })
            }
        }
    },
    /** 
     * @param {Object} data.link - сслыка на приминимость 
     */
    MarkaSet({ rootState, commit }, data) {
        commit("Applicabilities/Panel/SetPanelNew", {}, { root: true });
        let Ids = rootState.Applicabilities.Panel.Ids;
        commit("Applicabilities/Panel/SetPanelObject", {
            id: Ids,
            name: [
                "SelectedMarka", "DataModel",
            ],
            value: [
                data.link.id, data.link.children,
            ],
        }, { root: true });
    },
    /**
     * @param {Object} data.link - сслыка на приминимость 
     * @param {Array} data.DataModel - Массив всех потомков 1 марки
     */
    ModelSet({ rootState, commit, dispatch }, data) {
        let Panel = rootState.Applicabilities.Panel.Panel;
        let check = false;
        for (const key in Panel) { // Прогоняем Panel и ищем совпадения с Маркой
            if (Panel[key].SelectedMarka == data.link.parentId) {
                check = true;
                dispatch("PushPanelDataGenerations", {
                    linkPanel: Panel[key],
                    linkApplicabilities: data.link,
                })
                break;
            }
        }
        if (check === false) {// Все Panel проверены и был ли найден Panel с этим Id
            commit("Applicabilities/Panel/SetPanelNew", {}, { root: true });
            let Ids = rootState.Applicabilities.Panel.Ids;
            commit("Applicabilities/Panel/SetPanelObject", {
                id: Ids,
                name: [
                    "SelectedMarka",
                    "SelectedModel",
                    "DataGenerations",
                    "DataModel",
                ],
                value: [
                    data.link.parentId,
                    [data.link.id],
                    data.link.children,
                    data.DataModel,
                ],
            }, { root: true });
        }
    },
    /**
     * 
     * @param {Array} data.DataModel - Потомки у Mark
     * @param {Array} data.DataGenerations - Потомки у Model
     * @param {Number} data.MarkId - Id у Mark
     * @param {Object} data.link -  Ссылка на Applicabilities
     */
    GenerationsSet({ rootState, dispatch, commit }, data) {
        let Panel = rootState.Applicabilities.Panel.Panel;
        let checkMark = false;
        let checkModel = false;
        for (const keyPanel in Panel) { // Прогоняем Panel
            console.log("checkMark" + checkMark);
            console.log("checkModel" + checkModel);
            if (Panel[keyPanel].SelectedMarka == data.MarkId) { // Ищем совпадения с MarkId
                checkMark = true;
                for (const keyModel in Panel[keyPanel].SelectedModel) { // Прогоняем SelectedModel
                    console.log(Panel[keyModel]?.SelectedModel[keyModel]);
                    if (Panel[keyModel]?.SelectedModel[keyModel] == data.link.parentId) {// Ищем совпадения с ModelId
                        console.log("Model есть");
                        checkModel = true;
                        commit("Applicabilities/Panel/PushPanelObject", {
                            id: Panel[keyPanel].id,
                            name: [
                                "SelectedGenerations"
                            ],
                            value: [
                                data.link.id
                            ],
                        }, { root: true });
                        console.log("Mark True");
                        break;
                         
                    }
                }
            } 
            else if (checkMark == true) { // Проверяем были ли совпадения в checkMark
                if (checkModel === true) { // Проверяем были ли совпадения в checkModel
                    break;
                } else { // Сохраняем Model в Mark
                    console.log("Model Null");
                    commit("Applicabilities/Panel/PushPanelObject", {
                        id: Panel[keyPanel-1].id,
                        name: [
                            "SelectedModel", "SelectedGenerations" ,  
                        ],
                        value: [
                            data.link.parentId, data.link.id
                        ],
                    }, { root: true });
                }
            }
        }
        console.log("checkMark" + checkMark);
        console.log("checkModel" + checkModel);
        if(checkMark === false){ // Пройдены все Panel и не найдены совпадения
            dispatch("MarkaSet",{
                link:{
                    id: data.MarkId,
                    children: data.DataModel
                }
            });
            console.log( data.link.parentId);
            commit("Applicabilities/Panel/PushPanelObject", {
                id: Panel[Panel.length - 1].id,
                name: [
                    "SelectedModel" , "SelectedGenerations",
                ],
                value: [
                    data.link.parentId, data.link.id
                ],
            }, { root: true });
            dispatch("PushPanelDataGenerations",{
                linkPanel:  Panel[Panel.length - 1],
                linkApplicabilities:{children: data.DataGenerations},
            });
        }
    },
    /** 
     * @param {Object} data.linkPanel -  Ссылка на Panel
     * @param {Object} data.linkApplicabilities -  Ссылка на Applicabilities
     */
    PushPanelDataGenerations({ commit }, data) {
        let arr;
        if (data.linkPanel.DataGenerations.length == 0) { // У Панели уже есть Data
            arr = data.linkApplicabilities.children;
        } else {// У Панели нету Data
            arr = [...data.linkPanel.DataGenerations, ...data.linkApplicabilities.children];
        }
        commit("Applicabilities/Panel/PushPanelObject", {
            id: data.linkPanel.id,
            name: ["SelectedModel"],
            value: [data.linkApplicabilities.id],
        }, { root: true });
        commit("Applicabilities/Panel/SetPanel", {
            id: data.linkPanel.id,
            name: "DataGenerations",
            value: arr,
        }, { root: true });
    }

}