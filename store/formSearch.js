export const state = () => ({
    CategoriesChexbox: [],
    BrandChexbox: [],
    ApplicabilitiesChexbox: [],
    MinValue: 0,
    MaxValue: 60000,
})
export const mutations  =  {
    //  Брэнд  Chexbox
    SetBrandChexbox(store, data){
        store.BrandChexbox = data;
    },
    AddBrandChexbox(store, data){
        store.BrandChexbox.push(data);
    },
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
    GetCategoriesChexbox: s => s.CategoriesChexbox,
    GetBrandChexbox: s => s.BrandChexbox,
    GetApplicabilitiesChexbox: s => s.ApplicabilitiesChexbox,
    GetMinValue: s => s.MinValue,
    GetMaxValue: s => s.MaxValue,
}

//  отображает новости на главной странице