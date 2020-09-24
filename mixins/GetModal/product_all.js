export default {
    data() {
        return {
            dataset: undefined,
            ProductCard: undefined,
            productOffer: undefined,
            CartKolvo : 1,
        }
    },
    methods:{
        Getdataset(data){
            this.dataset = data;
        },
        GetdataProduct(data){
            console.log(data.kolvoCart);
            this.ProductCard = data.ProductCard;
            this.productOffer = data.productOffer;
            this.CartKolvo = data.kolvoCart;
        }
    }
}   