export const state = () => ({
  /**
   * @property Vuex массив для фильтров select состоящий из массивов
   */
  Panel: [],
  /** @property Последний Id массива в Panel */
  Ids: 0,
});
export const mutations = {
  /**  @function  SetPanelNew - Добавляет новый  пустой массив в Panel */
  SetPanelNew(store) {
    store.Ids++;
    store.Panel.push({
      id: store.Ids,
      SelectedMarka: "",
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
   * @param {Number} data.IdPanel - id Panel с которым работать
   * @param {Number} data.indexElement - id Element Panel с которым работать
   * @param {String} data.NameElement - id название Element Panel с которым работать
   * @function  DeletePanel - Удаляет Element по index в Panel
   */
  DeleteElementPanel(store, data) {
    const index = store.Panel.findIndex(panel => panel.id == data.IdPanel);
    store.Panel[index][data.NameElement].splice(data.indexElement, 1);
  },
  /**
   *
   * @function  DeleteAllPanel - Удаляет все объекты в Panel
   */
  DeleteAllPanel(store, data) {
    store.Panel = [];
  },
  /**
   * @function SetPanel - Добавляет Selected или Data в выбранном по id в Panel
   * @param {Number} data.id - id Panel с которым работать
   * @param {String} data.name - Названия ключа который нужно изменить в Panel
   * @param {Array} data.value -  Значение на которое нужно поменять состояния Panel
   */
  SetPanel(store, data) {
    const index = store.Panel.findIndex(panel => panel.id == data.id);
    store.Panel[index][data.name] = data.value;
  },
  PushPanel(store, data) {
    const index = store.Panel.findIndex(panel => panel.id == data.id);
    store.Panel[index][data.name].push(data.value);
  },
  /**
   * @param {*} data.id - id на Panel
   * @param {*} data.value - Массив значений  который сохранятся  в Panel
   * @param {*} data.name - Массив названии полей  которые изменятся  в Panel
   */
  SetPanelObject(store, data) {
    const indexPanel = store.Panel.findIndex(panel => panel.id == data.id);
    data.name.forEach((element, indexData) => {
      store.Panel[indexPanel][element] = data.value[indexData];
    });
  },

  /**
   * @param {*} data.id - id на Panel
   * @param {*} data.value - Массив значений  который сохранятся  в Panel
   * @param {*} data.name - Массив названии полей  которые изменятся  в Panel
   */
  PushPanelObject(store, data) {
    const indexPanel = store.Panel.findIndex(panel => panel.id == data.id);
    data.name.forEach((element, indexData) => {
      store.Panel[indexPanel][element].push(data.value[indexData]);
    });
  },
  /**
   * @function SetPanel - Очищает Selected и Data в выбранном по id в Panel
   * @param {Number} data.id - id Panel с которым работать
   * @param {String} data.NameSelected - Названия ключа Selected который нужно сбросить в Panel
   * @param {String} data.NameData - Названия ключа Data который нужно сбросить в Panel
   */
  ResetClildren(store, data) {
    const index = store.Panel.findIndex(panel => panel.id === data.id);
    store.Panel[index][data.NameSelected] = [];
    store.Panel[index][data.NameData] = [];
  },
  /**
   *
   * @function panel - Очищает все Panels
   */
  ResetAll(store) {
    store.Ids = 1;
    store.Panel = [
      {
        id: 1,
        SelectedMarka: "",
        SelectedModel: [],
        SelectedGenerations: [],
        DataModel: [],
        DataGenerations: [],
      },
    ];
  },
};
export const actions = {
  /**
   */
  SetPanelNew({ state, commit, getters, rootGetters }) {
    if (
      rootGetters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"]
        .length > state.Ids
    ) {
      commit("SetPanelNew");
    }
  },
  /***
   *
   * @param data.check - требуется ли делать reset selectChecked у применяемостей
   * @function удаляет все панели и reset у применяемостей selectChecked в false
   */
  ResetAll({ commit, state, rootGetters }, data) {
    if (state.Panel.length !== 0) {
      for (const key in state.Panel) {
        const index = rootGetters[
          "Applicabilities/ApplicabilitiessAll/GetApplicabilitiesParentId"
        ](state.Panel[key].SelectedMarka);
        if (index !== -1) {
          commit(
            "Applicabilities/ApplicabilitiessAll/SetApplicabilitiesSelectChecked",
            {
              index,
              value: false,
            },
            { root: true }
          );
        }
      }
    }
    commit("ResetAll");
  },
  /**
   * @function  DeletePanel - Ищет Index по Id и отправляет в мутацию удаления Panel
   */
  DeletePanel({ store, commit, getters, state, rootGetters }, id) {
    const index = getters.PanelfindIndex(id);
    if (state.Panel[index].SelectedMarka !== "") {
      console.log(state.Panel[index].SelectedMarka);
      const indexReset = rootGetters[
        "Applicabilities/ApplicabilitiessAll/GetApplicabilitiesParentId"
      ](state.Panel[index].SelectedMarka); // Найди index применяемости
      if (indexReset !== -1) {
        commit(
          "Applicabilities/ApplicabilitiessAll/SetApplicabilitiesSelectChecked",
          {
            // Отобразить его
            index: indexReset,
            value: false,
          },
          { root: true }
        );
      }
    }
    commit("DeletePanel", index);
  },

  /**
   *
   * @function SetAllIdUrl - Собирает с всех Panel id максимальной вложенности
   * @returns {String}  Строку массива всех выбранных id с Panel
   */
  // SetAllIdUrl({ state, commit, dispatch, getters }) {
  //   let ids = [];
  //   const deleteArr = []; // Массив пустых массивов
  //   state.Panel.forEach((element, index) => {
  //     if (element.SelectedMarka.length === 0) {
  //       deleteArr.push(element.id);
  //     }
  //     // ДОбавить SelectedGenerations
  //     if (element.SelectedGenerations.length !== 0) {
  //       ids.push(element.SelectedGenerations);
  //       const DataModelSelected = [];
  //       for (const keyModel in element.SelectedModel) {
  //         // Прогоняем выбранные модели
  //         for (const keyModelData in element.DataModel) {
  //           // Прогоняем Data всех моделей
  //           if (
  //             element.SelectedModel[keyModel] ===
  //             element.DataModel[keyModelData].id
  //           ) {
  //             // ищем данные о выбранных моделей
  //             DataModelSelected.push(element.DataModel[keyModelData]);
  //             break;
  //           }
  //         }
  //       }
  //       for (const keyModel in DataModelSelected) {
  //         // Прогоняем данные о выбранных моделей
  //         let check = false;
  //         for (const keyChildren in DataModelSelected[keyModel].children) {
  //           // Прогоняем children выбранных Моделей
  //           let checkChildren = false;
  //           for (const keyGenerations in element.SelectedGenerations) {
  //             // Прогоняет Id выбранных поколении
  //             if (
  //               DataModelSelected[keyModel].children[keyChildren].id ==
  //               element.SelectedGenerations[keyGenerations]
  //             ) {
  //               // Проверяет есть ли совпадения
  //               checkChildren = true;
  //               check = true;
  //               break;
  //             }
  //           }
  //           if (checkChildren === true) {
  //             // Совпадение найдено!
  //             break;
  //           }
  //         }
  //         if (check === false) {
  //           // У модели нету выбранных поколении
  //           ids.push(element.SelectedModel[keyModel]);
  //         }
  //       }
  //       // ДОбавить SelectedModel
  //     } else if (element.SelectedModel.length !== 0) {
  //       ids.push(element.SelectedModel);
  //       // ДОбавить SelectedMarka
  //     } else if (element.SelectedMarka.length !== 0) {
  //       ids.push(element.SelectedMarka);
  //     }
  //   });
  //   // Удалить все пустые панели
  //   deleteArr.forEach(elem => {
  //     if (getters.PanelLength > 1) {
  //       dispatch("Applicabilities/Panel/DeletePanel", elem, { root: true });
  //     }
  //   });
  //   if (ids.length !== 0) {
  //     ids = ids.flat(Infinity);
  //     ids = Array.from(new Set(ids)).join();
  //     return ids;
  //   }
  // },
  /**
   *
   * @function SetAllIdUrl - Собирает с всех Panel id максимальной вложенности
   * @returns {String}  Строку массива всех выбранных id с Panel
   */
  SetAllIdUrl({ state, commit, dispatch, getters }) {
    let ids = [];
    const deleteArr = []; // Массив пустых массивов
    state.Panel.forEach((element, index) => {
      if (element.SelectedMarka.length !== 0) {
        // ДОбавить SelectedMarka
        ids.push(element.SelectedMarka);
        if (element.SelectedModel.length !== 0) {
          // ДОбавить SelectedModel
          ids.push(element.SelectedModel);
          if (element.SelectedGenerations.length !== 0) {
            ids.push(element.SelectedGenerations);
          }
        }
      } else {
        deleteArr.push(element.id);
      }
    });
    // Удалить все пустые панели
    deleteArr.forEach(elem => {
      if (getters.PanelLength > 1) {
        dispatch("Applicabilities/Panel/DeletePanel", elem, { root: true });
      }
    });
    if (ids.length !== 0) {
      ids = ids.flat(Infinity);
      ids = ids.join();
      // ids = Array.from(new Set(ids)).join();
      return ids;
    }
  },
};
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
  PanelfindIndex: s => id => s.Panel.findIndex(panel => panel.id == id),
};
