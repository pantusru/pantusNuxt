export const state = () => ({
    MinValue: 0,
    MaxValue: 60000,
    BrandsChecked: [],
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
    
    SetBrandsChecked(store, data){
        store.BrandsChecked.push(data);
    },
    SetAllBrandsChecked(store, data){
        store.BrandsChecked = data;
    }
}
 
export const getters = {
    GetMinValue: s => s.MinValue,
    GetMaxValue: s => s.MaxValue,
    GetBrandsChecked: s => s.BrandsChecked,
}

//  отображает новости на главной странице