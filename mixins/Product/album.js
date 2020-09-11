export default {
    data() {
        return {
            UrlMain: this.dataset.ProductCard.ProductCardImage.url
        }
    },
    methods:{
        MainUrl(index){
            this.UrlMain = this.dataset.ProductCard.album[index].url
        },
        MainTrue(){
            this.UrlMain = this.dataset.ProductCard.ProductCardImage.url
        }
    }
}