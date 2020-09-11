<template>
    <b-row class="mt-5">
        <b-col cols="4" class="d-flex">
            <!-- БЛОК с альбомом -->
            <b-col cols="3">
                <b-img class="h-25 mb-3" :src="dataset.ProductCard.ProductCardImage.url" @click="MainTrue()"></b-img>
                <b-img   
                    :key="data.id" 
                    v-for="(data,index) in dataset.ProductCard.album" 
                    class="h-25 mb-3" 
                    :src="data.url" 
                    @click="MainUrl(index)"
                />
            </b-col>
            <!-- БЛОК с альбомом -->
            <b-col cols="10">
                <div class="h-150">
                    <b-img class="img-100 hover-img" :src="UrlMain"></b-img>
                </div>
            </b-col>
        </b-col>
        <b-col cols="9">
            
        </b-col>
    </b-row>
</template>

<script>
import mixins from "@/mixins/Product/album"
export default {
    mixins:[mixins],
    props:{
        dataset:{},
    },
    methods:{

    }
}
</script>

<style>
.h-150{
    height: 150px;
}
</style>