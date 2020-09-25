export default {
    data() {
        return {
            DataImg:{
                data:undefined,
            },
            DataBuy:{
                ProductCard:undefined,
                productOffer:undefined,
                CartKolvo:1,
            },
        }
    },
    provide(){
        return {
            DataImg: this.DataImg,
            DataBuy: this.DataBuy,
        }
    },
}   