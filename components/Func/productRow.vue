<template>
    <div>
        <BlogRow 
            v-for="data in array"
            :key="data.id"
            :Product="data"
            :Selected="Selected"
        >
        </BlogRow>
        <ModalImg/>
        <ModalBuy 
    />
    </div>
</template>

<script>
import BlogRow from "@/components/Products/Product/blog-row"
import ModalImg from  "@/components/Modal/ProductImg"
import ModalBuy from  "@/components/Modal/buyProduct"
export default {
    props:{
        array:{},
        Selected: {
            default: false,
        }
    },
    components: {
        ModalImg,
        ModalBuy,
        BlogRow
    },
}
</script>
