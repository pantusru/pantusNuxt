export const actions = {
        
    /**
    * @param data.parent.Marka - Родитель марки
    * @param data.parent.Model - Родитель модель  
    *  @param data.data  - Массив где искать id 
    *  @param data.id - Массив Id по которым искать
    *  @function SetId_Url -  по Url сохраняет выбранные applicabilities в Panel
    */
   SetId_Url({ dispatch }, data) {
    for (const keyData in data.data) {
        if (data.data[keyData].level == 1) {
            var SelectedMarka = data.data[keyData].parentId;
        } else if (data.data[keyData].level == 2) {
            var SelectedModel = data.data[keyData].id;
        }
        for (const keyId in data.id) {
            if(data.data[keyData].id == data.id[keyId]){
                dispatch("SearchPanel", {
                    level: data.data[keyData].level,
                    ids: {
                        Marka: data.data[keyData].id,
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
SearchPanel({ state, commit, rootState }, data) {
    let check = false;
    console.log(rootState.Applicabilities.Panel.Ids);
    for (const keyPanel in state.Panel) {
        if (check === true) {
            break;
        }
        if(data.level == 0){
            if (data.level == 0) {
                commit("Applicabilities/Panel/SetPanelNew", {} , {root: true});
                commit("Applicabilities/Panel/SetPanel",{
                    id: rootState.Applicabilities.Panel.Ids,
                    name: "SelectedMarka",
                    value:data.ids.Marka
                }, {root: true });
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
        else if (data.level == 2) {

        }
    }
    if (check === false) {
        if (data.level == 0) {
            commit("Applicabilities/Panel/SetPanelNew", {}, {root: true });
            commit("Applicabilities/Panel/SetPanel",{
                id: rootState.Applicabilities.Panel.Ids,
                name: "SelectedMarka",
                value:data.ids.Marka
            }, {root: true });
        }
    }
}
}