export const state = () => ({
    MinValue: 0,
    MaxValue: 60000,
    BrandsChecked: [],
    SortType: "",
    SortName: ""
})
export const mutations  =  {
    SetMinValue(store, data){
        store.MinValue = data;
    },
    SetMaxValue(store, data){
        store.MaxValue = data;
    },
    SetBrandsChecked(store, data){
        store.BrandsChecked.push(data);
    },
    SetAllBrandsChecked(store, data){
        store.BrandsChecked = data;
    },
    SetSort(store, data){
        store.SortType = data.SortType;
        store.SortName = data.SortName;
    }
}
export const getters = {
    GetMinValue: s => s.MinValue,
    GetMaxValue: s => s.MaxValue,
    GetBrandsChecked: s => s.BrandsChecked,
    GetSortName: s => s.SortName,
}

//  отображает новости на главной странице