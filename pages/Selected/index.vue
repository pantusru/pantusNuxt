<template>
    <b-container>
        <b-row>
            <b-col cols="3">
                <NavProfile/>
            </b-col>
            <b-col>
                <div>
                    <h2 class="mb-4"> Избранный товар </h2>
                    <div>
                        <ProductBlogRow :Product="data" v-for="data in Products" :key="data.id"/>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
// УКАЗАТЬ mixit 
import NavProfile from "@/components/Nav/Profile/index"
import ProductBlogRow from "@/components/Products/Product/blog-row"
export default {
    async fetch({store}){
        await store.dispatch("Selected/selected/_Selected");
    },
    components:{
        NavProfile,
        ProductBlogRow
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