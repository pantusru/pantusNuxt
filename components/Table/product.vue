<template>
    <b-table-simple bordered class="text-center">
        <b-thead>
            <b-tr>
                <b-th>Бренд</b-th>
                <b-th>Артикул</b-th>
                <b-th> <b-icon-camera-fill></b-icon-camera-fill></b-th>
                <b-th>Наименование</b-th>
                <b-th>Поставщик</b-th>
                <b-th>Срок</b-th>
                <b-th>Цена</b-th>
                <b-th></b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="product in Products" :key="product.id">
                <b-td> {{ product.ProductCard.brand.name }} </b-td>
                <b-td> {{ product.ProductCard.sku.original }} </b-td>
                <b-td> 
                    <div class="h50px col-5 mx-auto">
                        <b-img v-b-modal="toString(product.ProductCard.id)" class="img-100" :src="product.ProductCard.ProductCardImage.url"/>
                        <ImgModal :dataset="product" :idModal="toString(product.ProductCard.id)"/>
                    </div>
                </b-td>
                <b-td>{{ product.ProductCard.name }}</b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>

<script>
import ImgModal from "@/components/Modal/ProductImg"
export default {
    computed: {
        Products() {
            return this.$store.getters["Products/popular/GetProductPopual"]; 
        },
    },
    components:{
        ImgModal
    }
}
</script>

<style>
.h50px{
    height: 50px;
}
</style>