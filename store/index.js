export const state = () => ({
    show: true,
    ProductType : 'TableProduct'
})
export const mutations  =  {
    SetShow(store, data){
        store.show = data;
    },
    SetProductType(store, data){
        store.ProductType = data;
    },
}
export const getters = {
    Getshow: s => s.show,
    getProductType: s => s.ProductType,
}