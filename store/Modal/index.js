export const state = () => ({
    /**  @property Id товара который отображает в modal buy */
    ModaBuyIdProduct: undefined,
    /** @property Id товара который отображает в modal img */
    ModaImgIdProduct: undefined,
    /** @property ссылка на предложения товара который отображает в modal buy */
    ModaBuyLinkOffer: undefined,
    /** @property проверка  наличия товара в корзине*/
    CheckCart: false,
    /** @property проверка  наличия товара в корзине*/
    NameGettersModal: "",
})
export const mutations  =  {
    /** #Сохраняет в Vuex данные для modal buy
    * @param {Number} data.IdProduct -  id товара 
    * @param {Number} data.LinkOffer -  ссылка на предложения товара 
    * @param {Number} data.CheckCart -  состояние если товар в корзине
    */
    SetModaBuy(store, data){
        store.ModaBuyIdProduct = data.IdProduct;
        store.ModaBuyLinkOffer = data.LinkOffer;
        store.CheckCart = data.CheckCart;
        store.NameGettersModal = data.NameGettersModal;
    },
    /** #Сохраняет в Vuex данные для modal img
    * @param {Number} data -  id товара 
    */
    SetModalImg(store, data){
        store.ModaImgIdProduct = data;
    },
}
export const getters = {
    /** @returns {Number}  Id товар для modal buy */
    GetModaBuyIdProduct: s => s.ModaBuyIdProduct,
    /** @returns {Number}  ссылка на предлолжения товар для modal buy */
    GetModaBuyLinkOffer: s => s.ModaBuyLinkOffer,
    /** @returns {Boolean}  состояние товар в корзине  */
    GetCheckCart: s=> s.CheckCart,
    /** @returns {Boolean}  Id товар для modal img*/
    GetModaImgIdProduct: s=> s.ModaImgIdProduct,
    /** @returns {Boolean}  Id товар для modal img*/
    GetModaBuyNameGettersModal: s=> s.NameGettersModal,
}