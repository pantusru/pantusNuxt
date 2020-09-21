<template>
  <b-card class="mb-4" >
        <b-card-header header-class="border-0 bg-white p-0">
            <b-row class="align-items-center mb-3">
                <b-row class="col-6 align-items-center">
                    <b-col cols="4">
                        <b-img @click="ModalImg(Product, true)" fluid :src="Product.ProductCard.ProductCardImage.url"></b-img>
                    </b-col>
                    <h2> {{ Product.ProductCard.name}}</h2>
                </b-row>
                <b-row class="col-6">
                   <b-col>
                    <div class="mb-2">Цена</div>
                    <div><b>{{ Product.productOffer[0].prices }} Р</b></div>
                </b-col>
                <b-col class="text-right">
                    <div class="text-success mb-2">{{ Product.productOffer[0].quantity }}</div>
                    <BuyButton @click="ModalProduct(Product.ProductCard, Product.productOffer[0], true )" />
                </b-col>
                </b-row>
            </b-row>
        </b-card-header>
        <b-card-body class="py-0">
                <b-row class="justify-content-between">
                    <RowAtr name="Бренд" :link="'brand/' + Product.ProductCard.brand.id" :dataset="Product.ProductCard.brand.name" />
                    <RowAtr class="text-right" name="Поставщик" types="text" :dataset="Product.productOffer[0].supplier.name" />
                    <RowAtr name="Артикул" :dataset="Product.ProductCard.sku.original" />
                    <RowAtr name="Срок поставки" types="text" :dataset="Product.productOffer[0].supplier.deliveryDelay" />
                    <RowAtr slots=true>
                        <template v-slot:header>
                            <div class="mr-1">Применяемость</div> 
                            <nuxt-link :to="'applicabilities/' + Product.ProductCard.applicabilities[0].id" class="text-right">{{ Product.ProductCard.applicabilities[0].name }}</nuxt-link>
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
                                <nuxt-link :to="'categories/' + Product.ProductCard.categories[0].id" class="text-right">{{ Product.ProductCard.categories[0].name }}</nuxt-link>
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
import  mixinsImg from "@/mixins/Modal/ProductImg"
import  mixinsBuy from "@/mixins/Modal/buyProduct"
import BuyButton from "@/components/Products/Button/buyIndex"
import RowAtr from "@/components/Products/Product/Element/row"
export default {
    mixins:[mixinsImg, mixinsBuy],
    name: "ProductBlogRow",
    props: {
        Product: {}
    },
    components:{
        RowAtr,
        BuyButton
    }
}
</script>

<style>

</style>