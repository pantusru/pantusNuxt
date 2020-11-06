<template>
    <b-card
      header-class="bg-transparent border-0"
      footer-class="bg-transparent"
    >
        <template #header>
            <h6 class="mb-0">
              <nuxt-link class="text-436174 text-decoration-none" :to="'/product/'+ datasetProduct.ProductCard.id"> {{ datasetProduct.ProductCard.name }} </nuxt-link>
            </h6>
        </template>
            <ImgGetModal :product="datasetProduct" />
        <div class="mt-3">
            <div class="d-flex justify-content-between mb-1 border-bottom">
                <div><b class="fz-6">Бренд</b></div>
                <nuxt-link class="text-576b77 text-decoration-none fz-5_5"
                    :to="'/search?brand=' + datasetProduct.ProductCard.brand.id ">
                    {{ datasetProduct.ProductCard.brand.name }}
                </nuxt-link>
            </div>
            <div class="d-flex justify-content-between mb-1 border-bottom">
                <div> <b class="fz-6">Артикуль</b> </div>
                <nuxt-link
                  :to="'/search?name=' + datasetProduct.ProductCard.sku.original"
                  class="text-576b77 text-decoration-none fz-5_5"
                >
                  {{ datasetProduct.ProductCard.sku.original }}
                </nuxt-link>
            </div>
            <div class="border-bottom d-flex justify-content-between">
                <div><b class="fz-6">OEM</b></div>
                <nuxt-link
                  class="text-576b77 text-decoration-none fz-5_5"
                  :to="'/search?name=' + datasetProduct.ProductCard.ProductCardOem[0]"
                >
                  {{datasetProduct.ProductCard.ProductCardOem[0] }}
                </nuxt-link>
            </div>
            <div class="text-right">
                <nuxt-link class="d-block text-576b77 text-decoration-none fz-5_5" :to="'/search?name=' + data"
                    v-for="data in datasetProduct.ProductCard.ProductCardOem.slice(1,4)"
                    :key="data.id"
                >
                    {{ data }}
                </nuxt-link>
            </div>
        </div>
         <template v-slot:footer>
            <b-row align-h="between" class="mt-1">
                <b-col>
                    <div class="mb-3"> <b class="fz-5">Цена</b> </div>
                    <div><b class="fz-4">{{ datasetProduct.productOffer[0].prices }} Р</b></div>
                </b-col>
                <b-col class="text-right">
                    <div class="text-00b91e mb-2 fz-5_5">{{ datasetProduct.productOffer[0].quantity }}</div>
                        <BuyButton
                            :LinkOffer="datasetProduct.productOffer[0]"
                            :LinkProduct="datasetProduct.ProductCard"
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

