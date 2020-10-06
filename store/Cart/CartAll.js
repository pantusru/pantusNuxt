export const state = () => ({
     /**
     * @property массив всех товаров в корзине
     */
    CartProduct: [],
    // CheckCartCount: null,
})
export const mutations  =  {
    /**
     * #Сохраняет в Vuex товары в корзине
     * @param {Array} data - Массив товаров
     */
    SetCartProduct(store, data){
        store.CartProduct = data;
    },
    /**
     * #Сохраняет в Vuex новое кол-во товара в корзине
     * @param {Array} data.index - index массива CartProduct
     * @param {Array} data.value - кол-во товара
     */
    SetKolvoProduct(store, data){
        store.CartProduct[data.index].kolvo = data.value;
    },
    /**
     * #Сохраняет в Vuex новое кол-во товара в корзине
     * @param {Array} data.data - ссылка на элемент массива CartProduct
     * @param {Array} data.value - кол-во товара
     */
    SetKolvoProductArr(store, data){
        data.data.kolvo = data.value;
    },
    /**
     * #Сохраняет в Vuex новый товар в корзину
     * @param {Array} data - массив товара
     */
    PushCartProduct(store, data){
        store.CartProduct.unshift(data);
    },
    /**
     * #Удаляет с Vuex товар из корзину
     * @param {Array} data - index удаляемого товара
     */
    DeleteCartProduct(store, data){
        store.CartProduct.splice(data, 1);             
    }
}
export const actions = { 
    /**
     * #Запрос на получения товаров с корзины пользователя
     * @function  _CartProduct проверка на наличие, запрос, сохранения в vuex
     */
    async _CartProduct({store,dispatch, commit, getters}){
        if(getters.GetCartProduct.length === 0){
            let  data = await dispatch("Cart/axios/_CartProduct", {} , { root: true });
            commit("SetCartProduct", data);
        }  
    }
}
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
    GetCartProductId: s=> id => s.CartProduct.filter(cart => cart.ProductOffer.id == id),
        /**
        * ### Вывод index товара с корзины по Id
        * @returns {Number} index товара с корзины
        */
    GetCartProduct_offersIndex: (s) => (id) =>{
        return s.CartProduct.findIndex(cart => cart.ProductOffer.id == id);
    },
    /**
     * ### Вывод сумму всех товаров с корзины 
     * @returns {Number} сумму товаров с корзины
     */
    GetSymmaAll:s=> {
        var data = 0;
        for (const key in s.CartProduct) {
           data += s.CartProduct[key].kolvo * s.CartProduct[key].ProductOffer.prices;
        }
        return data;
    },
    /**
    * ### Вывод количество товара в корзине
    * @returns {Number} количество товара в корзине
     */
    GetLength: s=> s.CartProduct.length
}