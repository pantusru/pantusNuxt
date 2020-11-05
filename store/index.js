export const state = () => ({
    showLoader: true,
    ProductType : 'TableProduct',
    showButtonFilter: true,
    checkFilterClick: true,
    Form:{
        password: false,
        new_password: false,
    }
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
    },
    SetFormPassword(store, data){
        store.Form.password = data;
    },
    SetFormNewsPassword(store, data){
      store.Form.new_password = data;
    }
}
export const getters = {
    GetshowLoader: s => s.showLoader,
    getProductType: s => s.ProductType,
    GetshowButtonFilter: s => s.showButtonFilter,
    GetcheckFilterClick: s => s.checkFilterClick,
    GetFormPassword: s => s.Form.password,
    GetFormNewPassword: s => s.Form.new_password
}
