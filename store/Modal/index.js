export const state = () => ({
    /**
    * @property Id товара который отображает в modal buy
    */
   ModaBuyIdProduct: undefined,
   /**
    * @property ссылка на предложения товара который отображает в modal buy
    */
   ModaBuyLinkOffer: undefined,
   /**
    * @property проверка  наличия товара в корзине
    */
   CheckCart: false,
})
export const mutations  =  {
    /**
     * #Сохраняет в Vuex данные для modal buy
     * @param {Number} data.IdProduct -  id товара 
     * @param {Number} data.LinkOffer -  ссылка на предложения товара 
     * @param {Number} data.CheckCart -  состояние если товар в корзине
     */
    SetModaBuy(store, data){
        console.log(data.LinkOffer);
        store.ModaBuyIdProduct = data.IdProduct;
        store.ModaBuyLinkOffer = data.LinkOffer;
        store.CheckCart = data.CheckCart;
    },
}
export const getters = {
    /**
     * @returns {Number}  Id товар для модального окна
     */
    GetModaBuyIdProduct: s => s.ModaBuyIdProduct,
        /**
     * @returns {Number}  ссылка на предлолжения товар для модального окна
     */
    GetModaBuyLinkOffer: s => s.ModaBuyLinkOffer,
    /**
     * @returns {Boolean}  состояние товар в корзине
     */
    GetCheckCart: s=> s.CheckCart,
}