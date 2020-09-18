export default {
    data() {
        return {
            dataset: undefined,
            ProductCard: undefined,
            productOffer: undefined,
        }
    },
    methods:{
        Getdataset(data){
            this.dataset = data;
        },
        GetdataProduct(data){
              this.ProductCard = data.ProductCard;
              this.productOffer = data.productOffer;
        }
    }
}   