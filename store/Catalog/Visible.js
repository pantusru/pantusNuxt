export const mutations  =  { // Присваивает элементу checkbox значение видимости
    /**
     * 
     * @function SetAllVisible - Сохраняет в catalog новое значение visible
     * @param {Object} data.data - Ссылка на объект с вложенностью
     * @param {Boolean}  data.value - Значение на которое нужно поменять 
     */
    SetAllVisible(store, data){
        data.data.visible = data.value;
    },
}
    