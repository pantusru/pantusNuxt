export const state = () => ({
    showLoader: true,
    ProductType : 'TableProduct',
    showButtonFilter: true,
    checkFilterClick: true,
})
export const mutations  =  {
    SetShow(store, data){
        store.showLoader = data;
    },
    SetProductType(store, data){
        store.ProductType = data;
    },
    SetshowButtonFilter(store, data){
        store.showButtonFilter = data;
    },
    SetcheckFilterClick(store, data){
        console.log(data);
        store.checkFilterClick = data;
    }
}
export const getters = {
    GetshowLoader: s => s.showLoader,
    getProductType: s => s.ProductType,
    GetshowButtonFilter: s=> s.showButtonFilter,
    GetcheckFilterClick: s=>s.checkFilterClick,
}