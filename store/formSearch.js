export const state = () => ({
    MinValue: 0,
    MaxValue: 60000,
})
export const mutations  =  {
// min стоимость
    SetMinValue(store, data){
        store.MinValue = data;
    },
    // max стоимость
    SetMaxValue(store, data){
        store.MaxValue = data;
    },
}
 
export const getters = {
    GetMinValue: s => s.MinValue,
    GetMaxValue: s => s.MaxValue,
}

//  отображает новости на главной странице