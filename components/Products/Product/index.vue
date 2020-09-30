<template>
    <div v-if="dataset != undefined">
        <b-row class="mt-5 mb-3">
            <b-col cols="4" class="d-flex">
                <!-- БЛОК с альбомом -->
                <b-col cols="4">
                    <b-img class="h-25 mb-3"  :src="dataset.ProductCard.ProductCardImage.url" @click="MainTrue"></b-img>
                    <b-img   
                        :key="data.id" 
                        v-for="(data,index) in dataset.ProductCard.album" 
                        class="h-25 mb-3" 
                        :src="data.url" 
                        @click="MainUrl(index)"
                    />
                </b-col>
                <!-- БЛОК с альбомом -->
                <b-col cols="9">
                    <div class="h-150">
                        <b-img class="img-100 hover-img" :src="UrlMain"></b-img>
                    </div>
                </b-col>
            </b-col>
            <b-col cols="8">
                <h2>{{ dataset.ProductCard.name }}</h2>
                <b-row class="mb-3">
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
                <TableOffer :Linkoffset="dataset.productOffer" :ProductId="dataset.ProductCard.id"/>
                <ModalBuy/>
            </b-col>
        </b-row>
        <h4 class="mb-4">Аналоги и заменители</h4>
        <Table class="mb-4" :array="analogs" :CheckAnalogs="true"></Table>
        <h5 class="mb-3 text-515151">Кроссы по ОЕМ-номерам и аналогам</h5>
        <b-row class="justify-content-between col-8">
            <b-col cols="4 mb-1"
                v-for="oem in dataset.ProductCard.ProductCardOem" 
                :key="oem">
                <nuxt-link  to="" class="pr-3">
                        {{ oem }}
                </nuxt-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Table from "@/components/Table/product"
import ModalBuy from "@/components/Modal/buyProduct"
import TableOffer from "@/components/Table/offset"
import Share from "@/components/Modal/share"
import mixins from "@/mixins/Product/album"
export default {
    mixins:[mixins],
    props:{
        dataset:{},
    },
    created(){
        this.MainTrue();
    },
    computed:{
        analogs() {
            return this.$store.getters["Products/analogs/GetProducts"]
        },
    },
    components:{
        Share,
        TableOffer,
        ModalBuy,
        Table
    }
}
</script>

 