export const state = () => ({
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
  },
  NavMobile: false,
  cookie: "",
});
export const mutations = {
  SetCookie(store, data) {
    store.cookie = data;
  },
  SetShow(store, data) {
    store.showLoader = data;
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
  GetFormNewPassword: s => s.Form.new_password,
  GetcheckAuthorization: s => s.Form.checkAuthorization,
  GetNavMobile: s => s.NavMobile,
};
