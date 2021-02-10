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
  ResetCartProduct(store) {
    store.CartProduct = [];
  },
  // /**
  //  * #Сохраняет в Vuex количество измененных товаров
  //  * @param {Array} data - количество измененных товаров
  //  */
  // SetCartUpdateCount(store, data) {
  //   store.CartUpdateCount = data;
  // },
  // /**
  //  * #Сохраняет в Vuex  flag измененного количество товара в корзине
  //  * @param {Array} data.index - index товаров  в корзине
  //  * @param {Array} data.value - значение flag
  //  */
  // SetCartCheckCount(store, data) {
  //   store.CartProduct[data.index].checkCount = data.value;
  // },
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
  // /**
  //  * #Сохраняет в Vuex новое кол-во товара в корзине
  //  * @param {Array} data.index - index массива CartProduct
  //  * @param {Array} data.value - кол-во товара
  //  */
  // SetCountProduct(store, data) {
  //   store.CartProduct[data.index].Count = data.value;
  // },

  /**
   * #Сохраняет в Vuex новое кол-во товара в корзине
   * @param {Array} data.data - ссылка на элемент массива CartProduct
   * @param {Array} data.value - кол-во товара
   */
  SetCountProductArr(store, data) {
    data.data.Count = data.value;
    data.data.checkCount = true;
    store.CartActual = false;
  },
  // /**
  //  * #Сохраняет в Vuex новый товар в корзину
  //  * @param {Array} data - массив товара
  //  */
  // PushCartProduct(store, data) {
  //   store.CartProduct.unshift(data);
  // },
  // deteleCartProductIndex(stote, index) {
  //   stote.CartProduct.splice(index, 1);
  // },
  // /**
  //  * #Сохраняет в Vuex новый товар в корзину
  //  * @param {Array} data.data - Ссылка на продукт
  //  *  @param {Array} data.value - Новый offer;
  //  */
  // PushOfferProduct(store, data) {
  //   data.data[0].productOffer.push(data.value);
  // },
  // /**
  //  * #Удаляет с Vuex товар из корзину
  //  * @param {Array} data.data - Сслыка на удаляемый массив
  //  *  @param {Array} data.index - index удаляемого offers
  //  * @param {Boolean} data.flag  - flag нужно ли кидать запрос на удаление с БД
  //  */
  // DeleteCartProduct(store, data) {
  //   if (data.data.checkCount === true) {
  //     Проверка является ли удаленный товар с корзине измененным
  // store.CartUpdateCount = store.CartUpdateCount - 1;
  // }
  // if (store.CartUpdateCount === 0) {
  //   проверка если ли еще измененные товары
  // store.CartActual = true;
  // }
  // if (data.flag === true) {
  //   Сделать запрос
  // } else {
  //   Требовать обновить корзину
  // store.CartActual = false;
  // }
  // data.data.splice(data.index, 1); // Удаление с корзины
  // },
};
export const actions = {
  async DeleteCartProduct({ dispatch, store, commit }, id) {
    const data = await dispatch("Cart/axios/_CartProductDelete", id, {
      root: true,
    });
    if (data === undefined) {
      commit("SetCartProduct", data);
    }
  },

  /**
   * #Запрос на получения товаров с корзины пользователя
   * @function  _CartProduct проверка на наличие, запрос, сохранения в vuex
   */
  async _CartProduct({ store, dispatch, commit, getters }, check = false) {
    if (
      getters.GetCartProduct.length === 0 ||
      getters.GetCartActual === false ||
      check
    ) {
      const data = await dispatch(
        "Cart/axios/_CartProduct",
        {},
        { root: true }
      );
      if (data !== undefined) {
        commit("SetCartProduct", data);
      }
      commit("SetCartActual");
    }
  },
  // CartProductDeleteNotOffers({ state, commit }) {
  //   state.CartProduct.forEach((data, index) => {
  //     if (data.productOffer.length === 0) {
  //       commit("deteleCartProductIndex", index);
  //     }
  //   });
  // },
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
      const data = s.CartProduct[keyProduct].productOffer.filter(
        offer => offer.id === id
      );
      if (data.length !== 0) {
        return data;
      }
    }
  },
  GetCartProductCartId: s => id => {
    return s.CartProduct.filter(data => data.ProductCard.id === id);
  },
  /**
   * ### Вывод index товара с корзины по Id
   * @returns {Number} index товара с корзины
   */
  GetCartProduct_offersIndex: s => id => {
    // for (const keyProduct in s.CartProduct) {
    // const data = s.CartProduct[keyProduct].productOffer.findIndex(
    //   cart => cart.productOffer.id === id
    // );
    // if (data.length !== 0) {
    // return data;
    // }
    // }
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
          s.CartProduct[key].productOffer[keyOffer].Count *
          s.CartProduct[key].productOffer[keyOffer].prices;
      }
    }
    return Number(data.toFixed(2));
  },
  GetWeightAll: s => {
    let data = 0;
    for (const key in s.CartProduct) {
      data += s.CartProduct[key].ProductCard.params.weight;
    }
    return data;
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
