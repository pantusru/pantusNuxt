<template>
    <b-table-simple bordered class="text-center">
        <b-thead>
            <b-tr>
                <b-th>Бренд</b-th>
                <b-th>Артикул</b-th>
                <b-th> <b-icon-camera-fill></b-icon-camera-fill></b-th>
                <b-th>Наименование</b-th>
                <b-th>Поставщик</b-th>
                <b-th>Наличие</b-th>
                <b-th>Срок</b-th>
                <b-th>Цена</b-th>
                <b-th></b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <template v-for="product in Products"> 
                <b-tr  :key="product.id">
                    <b-td :rowspan="product.productOffer.length+1">  {{ product.ProductCard.brand.name }} </b-td>
                    <b-td :rowspan="product.productOffer.length+1"> {{ product.ProductCard.sku.original }} </b-td>
                    <b-td :rowspan="product.productOffer.length+1"> 
                        <div class="w-100px">
                            <b-img fluid v-b-modal="toString(product.ProductCard.id)" :src="product.ProductCard.ProductCardImage.url"/>
                            {{ product.ProductCard.id }}
                            <ImgModal :dataset="product" :idModal="toString(product.ProductCard.id)"/>
                        </div>
                    </b-td>
                    <b-td :rowspan="product.productOffer.length+1">{{ product.ProductCard.name }}</b-td>
                </b-tr>
                <b-tr v-for="offer in product.productOffer" :key="offer.id">
                    <b-td>{{ offer.supplier.name }}</b-td>
                    <b-td>{{ offer.quantity }}</b-td>
                    <b-td>{{ offer.supplier.deliveryDelay }}</b-td>
                    <b-td>{{ offer.prices }}</b-td>
                    <b-td>
                        <BuyButton :modalId="'offer-' + offer.id"/>
                        {{'offer-' + offer.id}}
                        <BuyModal :modalId="'offer-' + offer.id" :productOffer="offer" :ProductCard="product.ProductCard" />
                    </b-td>
                </b-tr>
            </template>
        </b-tbody>
    </b-table-simple>
</template>

<script>
import BuyModal from "@/components/Modal/buyProduct"
import BuyButton from "@/components/Products/Button/buyIndex"
import ImgModal from "@/components/Modal/ProductImg"
export default {
    computed: {
        Products() {
            return this.$store.getters["Products/popular/GetProductPopual"]; 
        },
    },
    components:{
        ImgModal,
        BuyModal,
        BuyButton
    }
}
</script>

<style>
.w-100px{
    width: 100px;
}
</style>