export const actions = {
    SetId_Url({ dispatch }, data) {
        
    }
}
// export const actions = {
//     /**
//     *  @param data.Marka - Родитель марки
//     *  @param data.Model - Родитель модель  
//     *  @param data.data  - Массив где искать id 
//     *  @param data.id - Массив Id по которым искать
//     *  @function SetId_Url -  по Url   id ищет  applicabilities
//     */
//     SetId_Url({ dispatch }, data) {
//         for (const keyData in data.data) {
//             let check = false;
//             if(data.data[keyData].level == 0){
//                 data.Marka = data.data[keyData].id;
//             }else if (data.data[keyData].level == 1) {
//                 data.Marka = data.data[keyData].parentId;
//                 data.Model = data.data[keyData].id;
//             }
//             // ПОИСК ID в приминимостей
//             for (const keyId in data.id) {
//                 if (data.data[keyData].id == data.id[keyId]) {
//                     console.log("data level" + data.data[keyData].level);
//                     // Ищем есть ли такое в Panel
//                     dispatch("SearchPanelAll", {
//                         level: data.data[keyData].level,
//                         ids: {
//                             Marka: data.Marka,
//                             Model: data.Model,
//                         },
//                         linkСhildren: data.data[keyData].children,
//                         link: data.data[keyData]
//                     });
//                     check = true;
//                     break;
//                 }
//             }
//             // ПРоверяем был ли найден id
//             if (check == true) {
//                 continue;
//             } else if (data.data[keyData].children.length != 0) {
//                 dispatch("SetId_Url", {
//                     data: data.data[keyData].children,
//                     id: data.id,
//                     parent: {
//                         Marka: data.Marka,
//                         Model: data.Model
//                     }
//                 })
//             }
//         }
//     },
//     /**
//      * @param {Number} data.level - Показывает в каких Selected искать 
//      * @param {Object} data.ids - id которые нужны 
//      * @param {Object} data.link -  Ссылка на Applicabilities 
//      * @param {Object} data.linkСhildren - Ссылка массива с потомками выбранной Applicabilities
//      */
//     SearchPanelAll({ state, commit, rootState }, data) {
//         let check = false;
//         let arr = rootState.Applicabilities.Panel.Panel;
//         // console.log(state.Panel);
//         console.log( "link Parent id" + data.link.parentId);
//         for (const keyPanel in arr) {
//             if (check === true) {
//                 break;
//             }
//             if (data.level == 0) {
//                     commit("Applicabilities/Panel/SetPanelNew", {}, { root: true });
//                     commit("Applicabilities/Panel/SetPanel", {
//                         id: rootState.Applicabilities.Panel.Ids,
//                         name: "SelectedMarka",
//                         value: data.ids.Marka
//                     }, { root: true });
//                     commit("Applicabilities/Panel/SetPanel", {
//                         id: rootState.Applicabilities.Panel.Ids,
//                         name: "DataModel",
//                         value: data.linkСhildren
//                     }, { root: true });
//                     check = true;
//                     break;
//             }
//             else if (data.level === 1) {
//                 console.log(data.link.parentId);
//                 console.log("true level 1");
//                 for (const keySelected in arr[keyPanel].SelectedMarka) {
//                     if (data.link.parentId == arr[keyPanel].SelectedMarka[keySelected]) {
//                         check = true;
//                         break;
//                     }
//                 }
//             }
//         }
//         if (check === false) {
//             if (data.level == 0) {
//                 console.log(" false level 0");
//                 commit("Applicabilities/Panel/SetPanelNew", {}, { root: true });
//                 commit("Applicabilities/Panel/SetPanel", {
//                     id: rootState.Applicabilities.Panel.Ids,
//                     name: "SelectedMarka",
//                     value: data.ids.Marka
//                 }, { root: true });
//                 commit("Applicabilities/Panel/SetPanel", {
//                     id: rootState.Applicabilities.Panel.Ids,
//                     name: "DataModel",
//                     value: data.linkСhildren
//                 }, { root: true });
//             }else if (data.level == 1) {
//                 console.log("false level 1");
//                 // console.log(data.link.parentId);
//                 commit("Applicabilities/Panel/SetPanelNew", {}, { root: true });
//                 // commit("Applicabilities/Panel/SetPanel", {
//                 //     id: rootState.Applicabilities.Panel.Ids,
//                 //     name: "SelectedMarka",
//                 //     value: data.link.ParentId
//                 // }, { root: true });
//                 // commit("Applicabilities/Panel/SetPanel", {
//                 //     id: rootState.Applicabilities.Panel.Ids,
//                 //     name: "SelectedModel",
//                 //     value:  data.ids.Model
//                 // }, { root: true });
//                 // commit("Applicabilities/Panel/SetPanel", {
//                 //     id: rootState.Applicabilities.Panel.Ids,
//                 //     name: "DataGenerations",
//                 //     value: data.link
//                 // }, { root: true });
//             }
//         }
//     },
//     SearchPanelMark(state,){

//     }
// }