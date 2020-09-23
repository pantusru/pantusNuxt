export const mutations  =  { // Присваивает элементу checkbox значение видимости
    SetAllVisible(store, data){
        data.data.visible = data.value;
    },
}
    