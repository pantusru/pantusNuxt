export const mutations = {
  /**
   * @param {Object} data.data -Ссылка на элемент cataloga который имеет вложеннность
   * @param {Boolean} data.value - Значение на которое нужно поменять
   * @function SetChecboxCheckedType - Сохраняет основное состояние у checxbox
   */
  SetChecboxCheckedType(state, data) {
    data.data.CheckedType = data.value;
  },
  /**
   * @param {Object} data.data -Ссылка на элемент cataloga который имеет вложеннность
   * @param {Boolean} data.value - Значение на которое нужно поменять
   * @function SetChecboxCheckedType - Сохраняет третье состояние у checxbox
   */
  SetChecboxIndeterminate(state, data) {
    // Сохраняет  состояние не определености checkbox true/false
    data.data.Indeterminate = data.value;
  },
};
export const actions = {
  /**
   * @param {Array} data.arr - Массив в котором ищем Id
   * @param  {Number, Array} data.id - Id Который нужно найди в массиве
   * @param {Boolean} data.value - Значение на которое нужно поменять найденный элемент массива
   * @param {Boolean} data.check - Нужно ли захлопывать фукнцию
   * @function ChexboxCheckAll - ищет в указаном массиве элемент.id == id
   */
  async ChexboxCheckAll({ store, commit, dispatch }, data) {
    // ПРИНИМАЕТ DATA массив Элементов и VALUE значения на которое нужно поменять
    let ParentID = false;
    const valueState = { CheckedType: [], Indeterminate: [] };
    const arr = data.arr;
    for (const key in arr) {
      // Прогоняем массив с вложенностью
      if (arr[key].parentId != null) {
        // Есть ли родитель у выбранного потомка
        ParentID = true;
      }
      // else if (data.check === true) {
      // Выход из рекурсии
      // return;
      // }
      if (typeof data.id === "number") {
        // Проверяем что это число
        data.id = [data.id];
      }
      for (const keyId in data.id) {
        // Прогоняем массив Id которых нужно найди
        if (arr[key].id === Number(data.id[keyId])) {
          // Найден ID
          // data.check = true;
          commit("SetChecboxCheckedType", {
            data: arr[key],
            value: data.value,
          });
          if (arr[key].children.length !== 0) {
            dispatch("ChexboxChildren", {
              data: arr[key].children,
              value: data.value,
            });
          }
          if (ParentID === true) {
            // Сохраняем значение потомков если есть родитель
            valueState.Indeterminate.push(arr[key].Indeterminate);
            valueState.CheckedType.push(data.value);
          }
        }
      }
      // if(check !== true){
      valueState.CheckedType.push(arr[key].CheckedType);
      valueState.Indeterminate.push(arr[key].Indeterminate);
      // check = false;
      // }
      if (arr[key].children.length !== 0) {
        await dispatch("ChexboxCheckAll", {
          arr: arr[key].children,
          value: data.value,
          id: data.id,
          // check: data.check,
        }).then(res => {
          if (res !== undefined) {
            commit("SetChecboxIndeterminate", {
              data: arr[key],
              value: res.Indeterminate,
            });
            commit("SetChecboxCheckedType", {
              data: arr[key],
              value: res.CheckedType,
            });
            valueState.Indeterminate.pop();
            valueState.CheckedType.pop();
            valueState.CheckedType.push(res.CheckedType);
            valueState.Indeterminate.push(res.Indeterminate);
          }
        });
      }
    }
    if (ParentID === true) {
      // ЕСТЬ РОДИТЕЛЬ!
      let Indeterminate;
      let ChexboxTrue;
      if (valueState.CheckedType.length === 1) {
        // Если 1 checkbox
        ChexboxTrue = !valueState.Indeterminate[0] && valueState.CheckedType[0]; // нет 3 состояния но выбран этот элемент
        Indeterminate = valueState.Indeterminate[0];
      } else {
        Indeterminate = valueState.CheckedType.some(element => {
          return element === true;
        });
        ChexboxTrue = valueState.CheckedType.every(elem => {
          // ПРОВЕРКА ЧТО ВСЕ ПОТОМКИ TRUE
          return elem === true;
        });
      }
      if (ChexboxTrue) {
        // ВСЕ CHEXBOX ВЫБРАНЫ
        return { CheckedType: true, Indeterminate: false };
      } else if (Indeterminate === true) {
        // ВЫБРАН ХОТЯ Б 1 CHEXBOX
        return { CheckedType: true, Indeterminate: true };
      } else {
        // НЕ ВЫБРАНО НЕЧЕГО!
        return { CheckedType: false, Indeterminate: false };
      }
    }
  },
  /**
   * @function  ChexboxChildren - Меняет всем элементам значения на указанное
   * @param {Array} dataset.data - Массив элементов который нужно поменять
   * @param  {Boolean} dataset.value -  Значение на которое нужно поменять
   */
  ChexboxChildren({ commit, dispatch }, dataset) {
    // ВСЕХ ПОТОМКАМ ВЫБРАННОГО ID СТАВИМ его значение
    // ПРИНИМАЕТ DATA массив потомков и VALUE значения этим потомкам
    const data = dataset.data;
    data.forEach(element => {
      commit("SetChecboxCheckedType", { data: element, value: dataset.value });
      if (element.children.length !== 0) {
        dispatch("ChexboxChildren", {
          data: element.children,
          value: dataset.value,
        });
      }
    });
  },
};
