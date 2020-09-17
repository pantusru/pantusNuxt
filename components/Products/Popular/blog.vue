<template>
    <b-card>
        <template v-slot:header>
            <h6 class="mb-0"> <nuxt-link class="text-dark" :to="'/product/'+ datasetProduct.ProductCard.id"> {{ datasetProduct.ProductCard.name }} </nuxt-link></h6>
        </template>
        <div>
            <b-card-img @click="ModalImg(datasetProduct, true)" class="cursor-pointer"
                :src="datasetProduct.ProductCard.ProductCardImage.url">
            </b-card-img>
        </div>
        <div class="mt-3">
            <div class="d-flex justify-content-between mb-1 border-bottom">
                <div>Бренд</div>
                <nuxt-link 
                    :to="'/search?brand=' + datasetProduct.ProductCard.brand.id ">
                    {{ datasetProduct.ProductCard.brand.name }}
                </nuxt-link>
            </div>
            <div class="d-flex justify-content-between mb-1 border-bottom">
                <div>Артикуль</div>
                <div>{{ datasetProduct.ProductCard.sku.original }}</div>
            </div>
            <div class="border-bottom d-flex justify-content-between">
                <div>OEM</div>
                <div>{{datasetProduct.ProductCard.ProductCardOem[0]}}</div>
            </div>
            <div class="text-right">
                <div 
                    v-for="data in datasetProduct.ProductCard.ProductCardOem.slice(1,4)"
                    :key="data.id"
                >
                    {{ data }}
                </div>
            </div>
        </div>
         <template v-slot:footer>
            <b-row align-h="between" class="mt-1">
                <b-col>
                    <div class="mb-3">Цена</div>
                    <div><b>{{ datasetProduct.productOffer[0].prices }} Р</b></div>
                </b-col>
                <b-col class="text-right">
                    <div class="text-success mb-2">{{ datasetProduct.productOffer[0].quantity }}</div>
                    <BuyButton @click="ModalProduct(datasetProduct.ProductCard, datasetProduct.productOffer[0], true )" />
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>
import  mixinsImg from "@/mixins/Modal/ProductImg"
import  mixinsBuy from "@/mixins/Modal/buyProduct"
import BuyButton from "@/components/Products/Button/buyIndex" 
export default {
    mixins:[mixinsImg, mixinsBuy],
    props:{
        datasetProduct:{},
    },
    components:{
        BuyButton,
    },
}
</script>

<style>

</style>