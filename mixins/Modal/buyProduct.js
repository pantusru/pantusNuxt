// export default {
//     // inject:["DataBuy"],
//     methods:{
//         /**
//          * @function ModalProduct - Вызывает 2 мутации для отображение модального окна и открывает модальное окно
//          * @param {Number} IdProduct -  Id товара  
//          * @param {Number} idOffer -  Id предложения на товар  
//          * @param {Boolean} CheckCart - Состояние если ли товар в корзине
//          */
//         ModalProduct(IdProduct, LinkOffer, CheckCart){ 
//             this.$store.commit("Modal/SetModaBuy",{
//                 IdProduct: IdProduct,
//                 LinkOffer: LinkOffer,
//                 CheckCart: CheckCart,
//             });	
//             this.$bvModal.show('buy');
//         },
//     },
// }   