<template>
    <b-container>
        <b-row>
            <b-col cols=4                         
                 v-for="data in popular"
                :key="data.id"
            >
            <PopularProduct @data="Getdataset" :datasetProduct="data"/>
            </b-col>
            <ProductImg :dataset="dataset"/>
        </b-row>
    </b-container>
</template>

<script>
import ModalBuy from  "@/components/Modal/buyProduct"
import ProductImg from  "@/components/Modal/ProductImg"
import PopularProduct from "@/components/Products/Popular/blog"
export default {
    data() {
        return {
            dataset: undefined,
        }
    },
    computed: {
        popular() {
            return this.$store.getters["Products/popular/GetProductPopual"]
        }
    },
    components: {
        PopularProduct,
    },
    methods:{
        Getdataset(data){
            this.dataset = data;
        },
    }
}
</script>

<style>

</style>