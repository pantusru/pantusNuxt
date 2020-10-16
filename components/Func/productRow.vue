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
import BlogRow from "@/components/Products/Product/blog-row"
export default {
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
