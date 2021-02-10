export const state = () => ({
  CheckCountProducts: false,
  // Показывать ли затемнение при загрузки
  showLoader: false,
  // Вид товара в фильтрах
  ProductType: "TableProduct",
  // Требуется ли прогонять всё фильтры при изменения route
  checkFilterClick: true,
  Form: {
    password: false, // Проверка пароля с формы
    new_password: false, // Проверка пароля при отправки запроса на новый пароль
    checkAuthorization: false, // Проверка авторизации от сервера
    errorRegister: undefined, // Ошибки при регистрации пользователя
  },
  NavMobile: false,
  cookie: "",
  AuthorizationOrder: false,
  orderUpdateCity: false,
});
export const mutations = {
  SetCheckCountProducts(store, data) {
    store.CheckCountProducts = data;
  },
  SetCookie(store, data) {
    store.cookie = data;
  },
  SetOrderUpdateCity(store, data) {
    store.orderUpdateCity = data;
  },
  SetShow(store, data) {
    store.showLoader = data;
  },
  SetAuthorizationOrder(store, data) {
    store.AuthorizationOrder = data;
  },
  SetProductType(store, data) {
    store.ProductType = data;
  },
  SetNavMobile(store, data) {
    store.NavMobile = data;
  },
  SetFormApi(store, data) {
    store.Form[data.data] = data.value;
  },
  SetcheckFilterClick(store, data) {
    store.checkFilterClick = data;
  },
};

export const getters = {
  GetCookie: s => s.cookie,
  GetshowLoader: s => s.showLoader,
  getProductType: s => s.ProductType,
  GetcheckFilterClick: s => s.checkFilterClick,
  GetFormPassword: s => s.Form.password,
  GetErrorRegister: s => s.Form.errorRegister,
  GetFormNewPassword: s => s.Form.new_password,
  GetcheckAuthorization: s => s.Form.checkAuthorization,
  GetNavMobile: s => s.NavMobile,
  getCheckCountProducts: s => s.CheckCountProducts,
  getAuthorizationOrder: s => s.AuthorizationOrder,
  getOrderUpdateCity: s => s.orderUpdateCity,
};
