<template>
    <b-row>
        <b-col cols="4"
            v-for="data in array"
            :key="data.id">
                <BlogProduct 
                    :datasetProduct="data"                
                >
                </BlogProduct>
        </b-col>
        <ModalImg/>
        <ModalBuy/>
    </b-row>
</template>

<script>
import BlogProduct from "@/components/Products/Popular/blog"
import ModalImg from  "@/components/Modal/ProductImg"
import ModalBuy from  "@/components/Modal/buyProduct"
export default {
    props:{
        array:{},
    },
    components: {
        ModalImg,
        ModalBuy,
        BlogProduct
    },
}
</script>