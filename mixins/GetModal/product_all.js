export default {
    data() {
        return {
            DataImg:{
                data:undefined,
            },
            // DataBuy:{
            //     ProductCard:undefined,
            //     productOffer:undefined,
            //     CartKolvo: undefined,
            // },
        }
    },
    provide(){
        return {
            DataImg: this.DataImg,
            // DataBuy: this.DataBuy,
        }
    },
}   