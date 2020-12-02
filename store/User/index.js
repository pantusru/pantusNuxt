export const state = () => ({
  /**
   * @property Проверка был ли загружен user
   */
  Loader: false,
  /**
   * @property  Проверка user авторизованный?
   */
  CheckUser: false,
  /**
   * ### Используется в форме Личные данные
   *
   * @property  Массив данных user
   *
   */
  FormData: {
    id: undefined,
    login: undefined,
    name: undefined,
    surname: undefined,
    patronymic: undefined,
    telephone: undefined,
  },
});
export const mutations = {
  /**
   * @function SetAll - Меняет 1поле данных о user
   * @param {String} data.name  - Название данных user
   * @param {*} data.value  - Новое значения данных user
   */
  SetFull(store, data) {
    store.FormData[data.name] = data.value;
  },
  /**
   * @function SetAll - сохраняет данные о user
   * @param {*} data - Все данные о user полученные с сервера
   */
  SetAll(store, data) {
    store.FormData = data;
  },
  /**
   * @function ResetForm - Удаляет все данные о пользователе
   */
  ResetForm(store, data) {
    store.FormData = {};
  },

  /**
   * @function LoaderTrue - Сохраняем флаг что данные о пользователи были получены с сервера
   */
  LoaderTrue(store) {
    store.Loader = true;
  },
  /**
   * @function AuthorizationTrue - Сохраняем флаг что данные о пользователь авторизовался
   */
  AuthorizationTrue(store) {
    store.CheckUser = true;
  },
  /**
   * @function AuthorizationFalse - Сохраняем флаг что данные о пользователь вышел из акк
   */
  AuthorizationFalse(store) {
    store.CheckUser = false;
  },
};
export const actions = {
  /**
   * #Запрос на получения данных о user
   * @function  _User проверка на наличие, запрос, сохранения в vuex
   */
  async _User({ store, dispatch, commit, getters }) {
    // СПОРНОЕ РЕШЕНИЕ
    if (getters.Loader === false) {
      // пользователь не загружен
      if (this.$cookies.get("Authorization") !== undefined) {
        // У пользователя есть токен
        const data = await dispatch("User/axios/_User", {}, { root: true });
        if (data !== undefined) {
          commit("SetAll", data);
          // Спорная вещь------
          commit("AuthorizationTrue");
        }
      } else {
        // Другой запрос который выдает пользователю Токен
      }
      commit("LoaderTrue");
    }
  },
};
export const getters = {
  /**
   * @function FormData - Возвращает все данные о user
   */
  FormData: s => s.FormData,
  /**
   * @function FormData - Возвращает флаг был ли загружены данные о user
   */
  Loader: s => s.Loader,
  /**
   * @function FormData - Возвращает флаг авторизованный ли user
   */
  CheckUser: s => s.CheckUser,
};
