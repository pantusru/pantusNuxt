export const state = () => ({
    ApplicabilitiesKolvoVisible: 0,
    CategoriesKolvoVisible: 0,
})

export const mutations  =  {
    SetKolvoVisible(store, data){
        store[data]  = data.value;
    },
    AddKolvoVisible(store, data){
        store[data]++;
    },
    ResetolvoVisible(store, data){
        store[data] = 0;
    },
}
export const getters = {
    GetApplicabilitiesKolvoVisible: s => s.ApplicabilitiesKolvoVisible,
    GetCategoriesKolvoVisible: s => s.CategoriesKolvoVisible,
}
 