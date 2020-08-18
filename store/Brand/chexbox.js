export const state = () => ({
    BrandChexbox: [],
})
export const mutations  =  {
    SetBrandChexbox(store, data){
        store.BrandChexbox = data;
    }
}
 
export const getters = {
    GetBrandChexbox: s => s.BrandChexbox,
}

//  отображает новости на главной странице