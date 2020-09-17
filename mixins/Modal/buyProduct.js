export default {
    data() {
        return {
            ProductCard: null,
            productOffer: null,
        }
    },
    methods:{
        ModalProduct(card, offer ,emit=false){
            if(emit == true){
                this.$emit('dataProduct', {
                    ProductCard: card,
                    productOffer: offer
                });
            }
            else{
                this.ProductCard = card;
                this.productOffer = offer;	
            }
            this.$bvModal.show('buy');
        }
    }
}   