<template>
    <b-container>
        <b-row>
            <b-col cols=4                         
                 v-for="data in popular"
                :key="data.id"
            >
            <PopularProduct @dataImg="Getdataset" @dataProduct="GetdataProduct" :datasetProduct="data"/>
            </b-col>
            <ModalImg :dataset="dataset"/>
            <ModalBuy :ProductCard="ProductCard" :productOffer="productOffer"  />
        </b-row>
    </b-container>
</template>

<script>
import ModalImg from  "@/components/Modal/ProductImg"
import ModalBuy from  "@/components/Modal/buyProduct"
import PopularProduct from "@/components/Products/Popular/blog"
export default {
    data() {
        return {
            dataset: undefined,
            ProductCard: undefined,
            productOffer: undefined,
        }
    },
    computed: {
        popular() {
            return this.$store.getters["Products/popular/GetProductPopual"]
        }
    },
    components: {
        PopularProduct,
        ModalImg,
        ModalBuy,

    },
    methods:{
        async Getdataset(data){
            this.dataset = data;
        },
        GetdataProduct(data){
              this.ProductCard = data.ProductCard;
              this.productOffer = data.productOffer;
        }
    }
}
</script>

<style>

</style>