export const state = () => ({
  // Показывать ли затемнение при загрузки
    showLoader: true,
  // Вид товара в фильтрах
    ProductType : 'TableProduct',
  //
  //   showButtonFilter: true,
  // Требуется ли прогонять всё фильтры при изменения route
    checkFilterClick: true,
    Form:{
        password: false, // Проверка пароля с формы
        new_password: false, // Проверка пароля при отправки запроса на новый пароль
    },
  NavMobile: false,
})
export const mutations  =  {
    SetShow(store, data){
        store.showLoader = data;
    },
    SetProductType(store, data){
        store.ProductType = data;
    },
  SetNavMobile(store, data){
    store.NavMobile = data;
  },
    // SetshowButtonFilter(store, data){
    //     store.showButtonFilter = data;
    // },
  SetFormApi(store, data){
    store.Form[data.data] = data.value;
  },
    SetcheckFilterClick(store, data){
        store.checkFilterClick = data;
    },
    // SetFormPassword(store, data){
    //     store.Form.password = data;
    // },
    // SetFormNewsPassword(store, data){
    //   store.Form.new_password = data;
    // }
}
export const getters = {
    GetshowLoader: s => s.showLoader,
    getProductType: s => s.ProductType,
    // GetshowButtonFilter: s => s.showButtonFilter,
    GetcheckFilterClick: s => s.checkFilterClick,
    GetFormPassword: s => s.Form.password,
    GetFormNewPassword: s => s.Form.new_password,
    GetNavMobile: s=> s.NavMobile,
}
