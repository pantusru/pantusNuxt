export default {
    data() {
        return {
            ProductCard: null,
            productOffer: null,
        }
    },
    methods:{
        ModalProduct(card, offer ,emit=false){
            this.ProductCard = card;
            this.productOffer = offer;	
            this.$bvModal.show('buy');
            if(emit == true){
                
            }
        }
    }
}   