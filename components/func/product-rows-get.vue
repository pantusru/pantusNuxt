<template>
    <div>
        <BlogRow
            v-for="data in array"
            :key="data.id"
            :Product="data"
            :Selected="Selected"
        >
        </BlogRow>
    </div>
</template>
<script>
import BlogRow from "@/components/products/product/blog-row"
export default {
    name: "product-rows-get",
    props:{
        array:{},
        Selected: {
            default: false,
        }
    },
    components: {
        BlogRow
    },
}
</script>
