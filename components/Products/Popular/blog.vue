<template>
    <b-card>
        <template v-slot:header>
            <h6 class="mb-0"> <nuxt-link class="text-dark" :to="'/product/'+ datasetProduct.ProductCard.id"> {{ datasetProduct.ProductCard.name }} </nuxt-link></h6>
        </template>
        <div>
            <ImgGetModal :product="datasetProduct" />
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
                        <BuyButton  
                            :LinkOffer="datasetProduct.productOffer[0]"
                            :idsProduct="datasetProduct.ProductCard.id" 
                        />
                </b-col>
            </b-row>
        </template>
    </b-card>
</template>

<script>
import ImgGetModal from "@/components/Products/Product/Element/img"
import BuyButton from "@/components/Products/Button/buyIndex" 
export default {
    name:"BlogProduct",
    props:{
        datasetProduct:{},
    },
    components:{
        BuyButton,
        ImgGetModal
    },
}
</script>

