export const state = () => ({
    CategoriesChexbox: [],
})
export const mutations  =  {
    SetCategoriesChexbox(store, data){
        store.CategoriesChexbox = data;
    }
}
 
export const getters = {
    GetCategoriesChexbox: s => s.CategoriesChexbox,
}

//  отображает новости на главной странице