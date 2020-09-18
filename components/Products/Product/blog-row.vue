<template>
  <b-card class="mb-4">
        <b-card-header header-class="border-0 bg-white row align-items-center">
                <b-col cols="2">
                    <b-img fluid :src="Product.ProductCard.ProductCardImage.url"></b-img>
                </b-col>
                <h2> {{ Product.ProductCard.name}}</h2>
        </b-card-header>
        <b-card-body>
                <b-row class="justify-content-between">
                    <RowAtr name="Бренд" :link="'brand/' + Product.ProductCard.brand.id" :dataset="Product.ProductCard.brand.name" />
                    <RowAtr class="text-right" name="Поставщик" types="text" :dataset="Product.productOffer[0].supplier.name" />
                    <RowAtr name="Артикул" :dataset="Product.ProductCard.sku.original" />
                    <RowAtr name="Срок поставки" types="text" :dataset="Product.productOffer[0].supplier.deliveryDelay" />
                    <RowAtr slots=true>
                        <template v-slot:header>
                            <div class="mr-1">Применяемость</div> 
                            <div class="text-right">{{ Product.ProductCard.applicabilities[0].name }}</div>
                        </template>
                        <template v-slot:body>
                            <div v-for="data in Product.ProductCard.applicabilities.slice(1, Product.ProductCard.applicabilities.length)" :key="data.id">
                                <nuxt-link class="text-right" :to="'applicabilities/' + data.id">{{ data.name }}</nuxt-link>
                            </div>
                        </template>
                    </RowAtr>
                    <RowAtr  slots=true>
                        <template v-slot:header>
                            <div class="mr-1">ОЕМ</div> 
                            <div class="text-right">{{ Product.ProductCard.ProductCardOem[0] }}</div>
                        </template>
                        <template v-slot:body>
                            <div v-for="data in Product.ProductCard.ProductCardOem.slice(1,Product.ProductCard.ProductCardOem.length )" :key="data.id">
                                <div class="text-right ">{{ data }}</div>
                            </div>
                        </template>
                    </RowAtr>
                    <RowAtr slots=true >
                        <template v-slot:header>
                            <div class="mr-1">Категории</div>
                                <div class="text-right">{{ Product.ProductCard.categories[0].name }}</div>
                        </template>
                         <template v-slot:body>
                            <div v-for="data in Product.ProductCard.categories.slice(1, Product.ProductCard.categories.length)" :key="data.id">
                                <nuxt-link class="text-right" :to="'categories/' + data.id">{{ data.name }}</nuxt-link>
                            </div>
                         </template>
                    </RowAtr>
                </b-row>
        </b-card-body>
  </b-card>
</template>

<script>
import RowAtr from "@/components/Products/Product/Element/row"
export default {
    name: "ProductBlogRow",
    props: {
        Product: {}
    },
    components:{
        RowAtr,
    }
}
</script>

<style>

</style>