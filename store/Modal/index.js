export const state = () => ({
  /**  @property ссылка на товар который отображает в modal buy */
  ModaBuyLinkProduct: undefined,
  /** @property ссылка товара который отображает в modal img */
  ModaImgLinkProduct: undefined,
  /** @property ссылка на предложения товара который отображает в modal buy */
  ModaBuyLinkOffer: undefined,
  /** @property проверка  наличия товара в корзине*/
  CheckCart: false,
});
export const mutations = {
  /** #Сохраняет в Vuex данные для modal buy
   * @param {Number} data.LinkProduct -  ссылка на  товар
   * @param {Number} data.LinkOffer -  ссылка на предложения товара
   * @param {Number} data.CheckCart -  состояние если товар в корзине
   * @param {Number} data.NameGettersModal -  Названия getters для отображения товара в modal buy
   */
  SetModaBuy(store, data) {
    store.ModaBuyLinkProduct = data.LinkProduct;
    store.ModaBuyLinkOffer = data.LinkOffer;
    store.CheckCart = data.CheckCart;
    store.NameGettersModal = data.NameGettersModal;
  },
  /** #Сохраняет в Vuex данные для modal img
   * @param {Number} data -  id товара
   */
  SetModalImg(store, data) {
    store.ModaImgLinkProduct = data;
  },
};
export const getters = {
  /** @returns {Number}  ссылка  на товар для modal buy */
  GetModaBuyLinkProduct: s => s.ModaBuyLinkProduct,
  /** @returns {Number}  ссылка на предлолжения товар для modal buy */
  GetModaBuyLinkOffer: s => s.ModaBuyLinkOffer,
  /** @returns {Boolean}  состояние товар в корзине  */
  GetCheckCart: s => s.CheckCart,
  /** @returns {Boolean}  Id товар для modal img*/
  GetModaImgLinkProduct: s => s.ModaImgLinkProduct,
};
