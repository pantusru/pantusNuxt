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
                    <RowAtr slots=true name="Применяемость" :dataset="Product.ProductCard.applicabilities">
                        <div>
                            <div v-for="data in Product.ProductCard.applicabilities" :key="data.id">
                                <nuxt-link class="text-right" :to="'applicabilities/' + data.id">{{ data.name }}</nuxt-link>
                            </div>
                        </div>
                    </RowAtr>
                    <RowAtr  slots=true name="ОЕМ" :dataset="Product.ProductCard.ProductCardOem">
                        <div>
                            <div v-for="data in Product.ProductCard.ProductCardOem" :key="data.id">
                                <div class="text-right ">{{ data }}</div>
                            </div>
                        </div>
                    </RowAtr>
                    <RowAtr v-if="Product.ProductCard.categories.length > 0"  slots=true name="Категории" :dataset="Product.ProductCard.categories[0].name">
                        <div>
                            <div v-for="data in Product.ProductCard.categories" :key="data.id">
                                <nuxt-link class="text-right" :to="'categories/' + data.id">{{ data.name }}</nuxt-link>
                            </div>
                        </div>
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