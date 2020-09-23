export const mutations  =  {
    SetChecboxCheckedType(state, data) { // Сохраняет состояние checkbox true/false 
        data.data.CheckedType = data.value;
    },
    SetChecboxIndeterminate(state, data) { // Сохраняет  состояние не определености checkbox true/false 
        data.data.Indeterminate = data.value;
    },
}
export const actions = { // ПОИСК ID
    async ChexboxCheckAll({store, commit, dispatch, getters}, data){
        // ПРИНИМАЕТ DATA массив Элементов и VALUE значения на которое нужно поменять
        let ParentID = false;
        let valueState = [];
        let  arr = data.arr;
        for (const key in arr) {
            if(arr[key].parentId != null){ // Есть ли родитель у выбранного потомка
                valueState.push(arr[key].CheckedType);
                ParentID = true;
            } 
            if(arr[key].id == data.id){// Найден выбранный CHEXBOX
                commit("SetChecboxCheckedType", {data:arr[key] , value: data.value});
                if(arr[key].children.lenght != 0){
                    dispatch("ChexboxChildren", {data:arr[key].children , value: data.value});
                }
                if(ParentID === true){ // Сохраняем значение потомков если есть родитель
                    valueState.pop();
                    valueState.push(data.value);
                }               
            }
            else if(arr[key].children.lenght != 0){ // НЕ найден ищем в потомках
                await dispatch("ChexboxCheckAll", {arr:arr[key].children , value: data.value , id:data.id})
                .then(res=>{
                    if(res != undefined){
                        commit("SetChecboxIndeterminate", {data: arr[key] , value: res.indeterminate});
                        commit("SetChecboxCheckedType", {data: arr[key] , value: res.checked });
                        valueState.pop();
                        valueState.push(res.checked);
                    }
                });
            }      
        }

        if(ParentID){ // ЕСТЬ РОДИТЕЛЬ!
            let ChexboxTrue = valueState.every(elem => { // ПРОВЕРКА ЧТО ВСЕ ПОТОМКИ TRUE
                return elem === true
            });
            let indeterminate = valueState.some(element =>{
                return element === true
            })
          if(ChexboxTrue){ // ВСЕ CHEXBOX ВЫБРАНЫ
             return {checked:true , indeterminate:false};
          }else if(indeterminate === true){ // ВЫБРАН ХОТЯ Б 1 CHEXBOX
              return {checked:true , indeterminate:true};  
          }else{ // НЕ ВЫБРАНО НЕЧЕГО!
            return {checked:false , indeterminate:false}; 
          }
        }
    },
    ChexboxChildren({commit,dispatch} ,dataset){ // ВСЕХ ПОТОМКАМ ВЫБРАННОГО ID СТАВИМ его значение 
        // ПРИНИМАЕТ DATA массив потомков и VALUE значения этим потомкам
        let data = dataset.data;
        data.forEach(element => {
            commit("SetChecboxCheckedType", {data: element , value: dataset.value });
            if(element.children.lenght !=0){
                dispatch("ChexboxChildren",{data: element.children , value: dataset.value });
            } 
        });
    },  
}