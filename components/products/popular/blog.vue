<template>
    <b-card
      header-class="bg-transparent border-0"
      footer-class="bg-transparent p-0 py-2 px-2"
    >
        <template #header>
            <h6 class="mb-0">
              <nuxt-link class="text-436174 text-decoration-none" :to="'/product/'+ datasetProduct.ProductCard.id"> {{ datasetProduct.ProductCard.name }} </nuxt-link>
            </h6>
        </template>
            <ImgGetModal :product="datasetProduct" />
        <div class="mt-3">
          <product-element-row-get
            name="Бренд"
            :dataset="datasetProduct.ProductCard.brand.name"
            :link="'/search?brand=' + datasetProduct.ProductCard.brand.id"
          />
          <product-element-row-get
            name="Артикуль"
            :dataset="datasetProduct.ProductCard.sku.original"
            :link="'/search?name=' + datasetProduct.ProductCard.sku.original"
          />
          <product-element-row-get
            name="OEM"
            :link="'/search?name=' + datasetProduct.ProductCard.ProductCardOem[0]"
            :dataset="datasetProduct.ProductCard.ProductCardOem[0]"
          />
          <product-element-row-get
            v-for="data in datasetProduct.ProductCard.ProductCardOem.slice(1,4)"
            :key="data.id"
            :link="'/search?name=' + data"
            :dataset="data"
          />
        </div>
         <template v-slot:footer>
            <b-row no-gutters align-h="between" class="mt-1">
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
import ImgGetModal from "@/components/products/product/element/img"
import BuyButton from "@/components/products/button/buy-index"
import ProductElementRowGet from "@/components/products/product/element/product-element-row-get";
export default {
    name:"BlogProduct",
    props:{
        datasetProduct:{},
    },
    components:{
      ProductElementRowGet,
        BuyButton,
        ImgGetModal
    },
}
</script>

