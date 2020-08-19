export const state = () => ({
    CategoriesChexbox: [],
    BrandChexbox: [],
    MinValue: 0,
    MaxValue: 60000,
})
export const mutations  =  {
    SetCategoriesChexbox(store, data){
        store.CategoriesChexbox = data;
    },
    SetBrandChexbox(store, data){
        store.BrandChexbox = data;
    },
    SetMinValue(store, data){
        store.MinValue = data;
    },
    SetMaxValue(store, data){
        store.MaxValue = data;
    },
    AddBrandChexbox(store, data){
        store.BrandChexbox.push(data);
    },
    AddCategoriesChexbox(store, data){
        store.CategoriesChexbox.push(data);
    }
}
 
export const getters = {
    GetCategoriesChexbox: s => s.CategoriesChexbox,
    GetBrandChexbox: s => s.BrandChexbox,
    GetMinValue: s => s.MinValue,
    GetMaxValue: s => s.MaxValue,
}

//  отображает новости на главной странице