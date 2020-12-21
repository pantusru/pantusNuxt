export const state = () => ({
  /**
   * @property массив всех товаров в корзине
   */
  CartProduct: [],
  /**
   * @property проверка требуется ли отправить запрос на сервер об обновление корзины
   */
  CartActual: true,
  /**
   * @property Количество товаров требующих обновление в корзине
   */
  CartUpdateCount: 0,
  // CheckCartCount: null,
});
export const mutations = {
  /**
   * #Сохраняет в Vuex количество измененных товаров
   * @param {Array} data - количество измененных товаров
   */
  SetCartUpdateCount(store, data) {
    store.CartUpdateCount = data;
  },
  /**
   * #Сохраняет в Vuex  flag измененного количество товара в корзине
   * @param {Array} data.index - index товаров  в корзине
   * @param {Array} data.value - значение flag
   */
  SetCartCheckCount(store, data) {
    store.CartProduct[data.index].checkCount = data.value;
  },
  /**
   * #Сохраняет в Vuex товары в корзине
   * @param {Array} data - Массив товаров
   */
  SetCartProduct(store, data) {
    store.CartProduct = data;
  },
  /**
   * #Изменить флаг корзина обновлена
   */
  SetCartActual(store) {
    store.CartActual = true;
  },
  /**
   * #Сохраняет в Vuex новое кол-во товара в корзине
   * @param {Array} data.index - index массива CartProduct
   * @param {Array} data.value - кол-во товара
   */
  SetCountProduct(store, data) {
    store.CartProduct[data.index].Count = data.value;
  },
  /**
   * #Сохраняет в Vuex новое кол-во товара в корзине
   * @param {Array} data.data - ссылка на элемент массива CartProduct
   * @param {Array} data.value - кол-во товара
   */
  SetCountProductArr(store, data) {
    data.data.Count = data.value;
    store.CartActual = false;
  },
  /**
   * #Сохраняет в Vuex новый товар в корзину
   * @param {Array} data - массив товара
   */
  PushCartProduct(store, data) {
    store.CartProduct.unshift(data);
  },
  /**
   * #Удаляет с Vuex товар из корзину
   * @param {Array} data.index - index удаляемого товара
   * @param {Boolean} data.flag  - flag нужно ли кидать запрос на удаление с БД
   */
  DeleteCartProduct(store, data) {
    if (store.CartProduct[data.index].checkCount === true) {
      // Проверка является ли удаленный товар с корзине измененным
      store.CartUpdateCount = store.CartUpdateCount - 1;
    }
    if (store.CartUpdateCount === 0) {
      // проверка если ли еще измененные товары
      store.CartActual = true;
    }
    if (data.flag === true) {
      // Сделать запрос
      console.log("Запрос на обновление корзины");
    } else {
      // Требовать обновить корзину
      store.CartActual = false;
    }
    store.CartProduct.splice(data.index, 1); // Удаление с корзины
  },
};
export const actions = {
  /**
   * #Запрос на получения товаров с корзины пользователя
   * @function  _CartProduct проверка на наличие, запрос, сохранения в vuex
   */
  async _CartProduct({ store, dispatch, commit, getters }) {
    if (
      getters.GetCartProduct.length === 0 ||
      getters.GetCartActual === false
    ) {
      const data = await dispatch(
        "Cart/axios/_CartProduct",
        {},
        { root: true }
      );
      console.log(...data);
      commit("SetCartProduct", data);
      commit("SetCartActual");
    }
  },
};
export const getters = {
  /**
   * ### Вывод всех  товаров с корзины
   * @returns {Array}  товаров с корзины
   */
  GetCartProduct: s => s.CartProduct,
  /**
   * ### Вывод  товара с корзины по Id
   * @returns {Object} объект товара с корзины
   */
  GetCartProductId: s => id => {
    for (const keyProduct in s.CartProduct) {
      s.CartProduct[keyProduct].productOffer.filter(offer => offer.id === id);
    }
  },
  /**
   * ### Вывод index товара с корзины по Id
   * @returns {Number} index товара с корзины
   */
  GetCartProduct_offersIndex: s => id => {
    return s.CartProduct.findIndex(cart => cart.productOffer.id === id);
  },
  /**
   * ### Вывод сумму всех товаров с корзины
   * @returns {Number} сумму товаров с корзины
   */
  GetSymmaAll: s => {
    let data = 0;
    for (const key in s.CartProduct) {
      // console.log(s.CartProduct[key].Count);
      for (const keyOffer in s.CartProduct[key].productOffer) {
        data +=
          s.CartProduct[key].Count *
          s.CartProduct[key].productOffer[keyOffer].prices;
      }
    }
    return Number(data.toFixed(2));
  },
  /**
   * ### Вывод количество товара в корзине
   * @returns {Number} количество товара в корзине
   */
  GetLength: s => s.CartProduct.length,
  /**
   * ### Вывод флаг требуется ли обновлять корзину
   * @returns {Boolean} флаг обновления корзину
   */
  GetCartActual: s => s.CartActual,
  GetCartUpdateCount: s => s.CartUpdateCount,
};
