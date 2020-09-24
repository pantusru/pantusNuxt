export default {
    data() {
        return {
            ProductCard: null,
            productOffer: null,
            kolvoCart: 1,    
        }
    },
    props:{
    
    },
    methods:{
        ModalProduct(card, offer ,emit=false){
            if(emit == true){
                this.$emit('dataProduct', {
                    ProductCard: card,
                    productOffer: offer,
                    kolvoCart: this.kolvoCart,
                });
            }
            else{
                this.ProductCard = card;
                this.productOffer = offer;	
            }
            this.$bvModal.show('buy');
        },
        SetkolvoCart(kolvoCart){ // Количество товара в корзине от кнопки
            this.kolvoCart = kolvoCart; 
        }
    }
}   