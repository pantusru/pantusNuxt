<template>
    <b-card>
        <template v-slot:header>
            <h6 class="mb-0"> <nuxt-link class="text-dark" :to="'/product/'+ dataset.ProductCard.id"> {{ dataset.ProductCard.name }} </nuxt-link></h6>
        </template>
        <div>
            <b-card-img  
                v-b-modal="'img-' + dataset.ProductCard.id"
                :src="dataset.ProductCard.ProductCardImage.url">
            </b-card-img>
            <ProductImg :dataset="dataset" :idModal="'img-' + dataset.ProductCard.id" />
        </div>
        <div class="mt-3">
            <div class="d-flex justify-content-between mb-1 border-bottom">
                <div>Бренд</div>
                <nuxt-link 
                    :to="'/search?brand=' + dataset.ProductCard.brand.id ">
                    {{ dataset.ProductCard.brand.name }}
                </nuxt-link>
            </div>
            <div class="d-flex justify-content-between mb-1 border-bottom">
                <div>Артикуль</div>
                <div>{{ dataset.ProductCard.sku.original }}</div>
            </div>
            <div class="border-bottom d-flex justify-content-between">
                <div>OEM</div>
                <div>{{dataset.ProductCard.ProductCardOem[0]}}</div>
            </div>
            <div class="text-right">
                <div 
                    v-for="data in dataset.ProductCard.ProductCardOem.slice(1,4)"
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
                    <div><b>{{ dataset.ProductOffer[0].prices }} Р</b></div>
                </b-col>
                <b-col class="text-right">
                    <div class="text-success mb-2">{{ dataset.ProductOffer[0].quantity }}</div>
                    <BntBuy :modalId="dataset.ProductCard.id"/>
                    <ModalBuy :dataset="dataset" :modalId="dataset.ProductCard.id" />
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>
import BntBuy from  "@/components/Products/Button/buyIndex"
import ModalBuy from  "@/components/Modal/buyProduct"
import ProductImg from  "@/components/Modal/ProductImg"
export default {
    props:{
        dataset:{},
    },
    components:{
        BntBuy,
        ModalBuy,
        ProductImg
    },
}
</script>

<style>

</style>