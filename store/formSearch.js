export const state = () => ({
    CategoriesChexbox: [],
    BrandChexbox: [],
    ApplicabilitiesChexbox: [],
    MinValue: 0,
    MaxValue: 60000,
})
export const mutations  =  {
    //  Категории Chexbox
    SetCategoriesChexbox(store, data){
        store.CategoriesChexbox = data;
    },
    AddCategoriesChexbox(store, data){
        store.CategoriesChexbox.push(data);
    },
    deleteCategoriesChexbox(store, id){
        delete  store.CategoriesChexbox.find((element) => {
            if(element === id){
                return element
            }
        });
    },
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
    //  Применимость
    AddApplicabilitiesChexbox(store, data){
        store.ApplicabilitiesChexbox.push(data);
    },
    SetApplicabilitiesChexbox(store, data){
        store.ApplicabilitiesChexbox = data;
    },
    deleteApplicabilitiesChexbox(store, id){
        delete store.ApplicabilitiesChexbox.find((element) => {
            if(element === id){
                return element
            }
        });
    },
}
 
export const getters = {
    GetCategoriesChexbox: s => s.CategoriesChexbox,
    GetBrandChexbox: s => s.BrandChexbox,
    GetMinValue: s => s.MinValue,
    GetMaxValue: s => s.MaxValue,
    GetApplicabilitiesChexbox: s => s.ApplicabilitiesChexbox,
}

//  отображает новости на главной странице