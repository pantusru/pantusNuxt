<template>
    <div>
        <b-row class="mt-5 mb-3" v-if="dataset != undefined">
            <b-col cols="12" sm="8" lg="5" class="d-flex flex-wrap">
                <!-- БЛОК с альбомом -->
                <b-col cols="3" lg="6" class="">
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
                <b-col lg="6" cols="8">
                    <div class="h-150">
                        <b-img class="img-100 hover-img" :src="UrlMain"></b-img>
<!--                        <ProductZoomer :base-images="UrlMain"/>-->

                    </div>
                </b-col>
            </b-col>
            <b-col lg="7" cols="12">
                <h2>{{ dataset.ProductCard.name }}</h2>
                <b-row class="mb-3">
                    <b-col cols="12" lg="4" class="mb-lg-0 mb-2">
                        Производитель: <span> {{ dataset.ProductCard.brand.name }}</span>
                    </b-col>
                    <b-col cols="12" lg="4">
                        Артикул: <span>{{ dataset.ProductCard.sku.original }}</span>
                    </b-col>
                    <b-col cols="4">
                        <b-icon-reply v-b-modal="'share'" class="h3 cursor-pointer link-danger"></b-icon-reply>
                        <Share/>
                    </b-col>
                </b-row>
                <TableOffer :Linkoffset="dataset.productOffer" :LinkProduct="dataset.ProductCard"/>
                <ModalBuy/>
            </b-col>
        </b-row>
        <h4 class="mb-4">Аналоги и заменители</h4>
        <Table class="mb-4" :array="analogs" :CheckAnalogs="true"></Table>
        <h5 class="mb-3 text-515151">Кроссы по ОЕМ-номерам и аналогам</h5>
        <b-row class="justify-content-between col-12"  lg="8">
            <b-col cols="12" sm="6" lg="4" class="mb-1"
                v-for="oem in dataset.ProductCard.ProductCardOem"
                :key="oem">
                <nuxt-link  :to="'/search?name=' + oem" class="pr-3">
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
        Table,
    }
}
</script>

