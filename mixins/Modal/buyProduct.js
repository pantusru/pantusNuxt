export default {
    inject:["DataBuy"],
    methods:{
        ModalProduct(card, offer, kolvoCart){
            console.log(kolvoCart);
            this.DataBuy.ProductCard = card;
            this.DataBuy.productOffer = offer;
            this.DataBuy.CartKolvo = kolvoCart; 	
            this.$bvModal.show('buy');
        },
    },
}   