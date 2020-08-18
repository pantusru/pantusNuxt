export const state = () => ({
    show: true,
})
export const mutations  =  {
    SetShow(store, data){
        store.show = data;
    }
}
export const getters = {
    Getshow: s => s.show,
}