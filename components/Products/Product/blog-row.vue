<template>
  <b-card class="mb-4" >
        <b-card-header header-class="border-0 bg-white p-0">
            <b-row class="align-items-center mb-3 justify-content-between">
                <b-row class="col-5 align-items-center">
                    <b-col cols="4">
                        <b-img @click="ModalImg(Product, true)" fluid :src="Product.ProductCard.ProductCardImage.url"></b-img>
                    </b-col>
                    <h2> {{ Product.ProductCard.name}}</h2>
                </b-row>
            </b-row>
        </b-card-header>
        <b-card-body class="py-0 ">
            <div class="d-flex">
                <b-row class="flex-column col-5 p-0">
                    <RowAtr name="Бренд" :link="'brand/' + Product.ProductCard.brand.id" :dataset="Product.ProductCard.brand.name" />
                    <RowAtr name="Артикул" :dataset="Product.ProductCard.sku.original" />
                    <RowAtr slots=true v-if="Product.ProductCard.applicabilities != undefined">
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
                    <RowAtr  slots=true v-if="Product.ProductCard.ProductCardOem != undefined">
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
                    <RowAtr slots=true v-if="Product.ProductCard.categories != undefined">
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
                <b-row class="justify-content-between flex-column col-8">
                    <TableOffset @dataProduct="EmitProduct" :offset="Product.productOffer" :Product="Product.ProductCard" />
                </b-row>
            </div>
        </b-card-body>
  </b-card>
</template>

<script>
import mixinsImg from "@/mixins/Modal/ProductImg"
import BuyButton from "@/components/Products/Button/buyIndex"
import RowAtr from "@/components/Products/Product/Element/row"
import TableOffset from "@/components/Table/offset"
export default {
    methods:{
        EmitProduct(data){
            this.$emit('dataProduct', {
                ProductCard: data.ProductCard,
                productOffer: data.productOffer,
                kolvoCart: data.kolvoCart,
            })
        }
    },
    mixins:[mixinsImg],
    name: "ProductBlogRow",
    props: {
        Product: {}
    },
    components:{
        RowAtr,
        BuyButton,
        TableOffset
    }
}
</script>

<style>

</style>