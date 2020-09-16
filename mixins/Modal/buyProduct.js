export default {
    data() {
        return {
            ProductCard: null,
            productOffer: null,
        }
    },
    methods:{
        ModalProduct(card, offer){
            console.log("SS");
            this.ProductCard = card;
            this.productOffer = offer;
            this.$bvModal.show('buy')	
        }
    }
}