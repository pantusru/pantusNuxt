<template>
    <b-container>
        <b-row>
            <div class="pr-3">
                <NavProfile/>
            </div>
            <b-col>
                <div>
                    <h2 class="mb-4"> Избранный товар </h2>
                    <div>
                        <ProductBlogRow 
                            @dataImg="Getdataset" 
                            @dataProduct="GetdataProduct" 
                            :Product="data" v-for="data in Products" 
                            :key="data.id"/>
                    </div>
                        <ModalImg :dataset="dataset"/>
                        <ModalBuy :ProductCard="ProductCard" :productOffer="productOffer"  />
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import ModalImg from  "@/components/Modal/ProductImg"
import ModalBuy from  "@/components/Modal/buyProduct"
import NavProfile from "@/components/Nav/Profile/index"
import ProductBlogRow from "@/components/Products/Product/blog-row"
import ProductModal from "@/mixins/GetModal/product_all"
export default {
    mixins:[ProductModal],
    async fetch({store}){
        await store.dispatch("Selected/selected/_Selected");
    },
    components:{
        NavProfile,
        ProductBlogRow,
        ModalImg,
        ModalBuy
    },
    computed:{
        Products(){
            return this.$store.getters["Selected/selected/GetSelected"];
        }
    },
}
</script>

<style>

</style>