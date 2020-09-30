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
        <b-col cols="8">
            <h2>{{ dataset.ProductCard.name }}</h2>
            <b-row>
                <b-col cols="4">
                    Производитель: <span> {{ dataset.ProductCard.brand.name }}</span>  
                </b-col>
                <b-col cols="4">
                    Артикул: <span>{{ dataset.ProductCard.sku.original }}</span> 
                </b-col>
                 <b-col cols="4">
                    <b-icon-reply v-b-modal="'share'" class="h3 cursor-pointer link-danger"></b-icon-reply>
                    <Share/>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>
import Share from "@/components/Modal/share"
import mixins from "@/mixins/Product/album"
export default {
    mixins:[mixins],
    props:{
        dataset:{},
    },
    methods:{

    },
    components:{
        Share,
    }
}
</script>

 