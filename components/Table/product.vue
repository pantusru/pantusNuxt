<template>
    <b-table-simple
        class="text-center fz-5_5"
        >
        <b-thead class="border">
            <b-tr class="bg-fafafa text-555">
                <b-th>Бренд</b-th>
                <b-th>Артикул</b-th>
                <b-th> <b-icon-camera-fill></b-icon-camera-fill></b-th>
                <b-th>Наименование</b-th>
                <b-th>Поставщик</b-th>
                <b-th>Наличие</b-th>
                <b-th>Срок</b-th>
                <b-th>Цена</b-th>
                <b-th><PanelVid/></b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <template v-for="product in array"> 
                <b-tr :key="product.ProductCard.id" class="hover-true">
                    <b-td :rowspan="product.productOffer.length+1"> 
                        <nuxt-link class="text-576b77 link-danger font-weight-bold" :to="product.ProductCard.brand.id">{{ product.ProductCard.brand.name }} </nuxt-link> 
                    </b-td>
                    <b-td :rowspan="product.productOffer.length+1"> <nuxt-link class="text-576b77 link-danger" :to="product.ProductCard.id">{{product.ProductCard.sku.original}}</nuxt-link> </b-td>
                    <b-td :rowspan="product.productOffer.length+1"> 
                        <div class="w-100px">
                            <b-img class="cursor-pointer" @click="ModalImg(product)" fluid :src="product.ProductCard.ProductCardImage.url"/>
                        </div>
                    </b-td>
                    <b-td :rowspan="product.productOffer.length+1">
                        <nuxt-link class="text-576b77 link-danger" :to="product.ProductCard.brand.id">  {{ product.ProductCard.name }} </nuxt-link>
                        </b-td>
                    <b-td class="position-absolute border-0 left-40">
                        <Chosen :id="product.ProductCard.id"/>
                    </b-td>
                </b-tr>
                <b-tr class="hover-true border-bottom" v-for="offer in product.productOffer" :key="offer.id">
                    <b-td class="border-top-0 text-555" >{{ offer.supplier.name }}</b-td>
                    <b-td  class="border-top-0 text-00b91e">{{ offer.quantity }}</b-td>
                    <b-td  class="border-top-0 text-555">{{ offer.supplier.deliveryDelay }}</b-td>
                    <b-td  class="border-top-0 text-555 fz-5 font-weight-bold">{{ offer.prices }} Р</b-td>
                    <b-td  class="border-top-0"> 
                        <BuyButton @click="ModalProduct(product.ProductCard, offer)"/>
                    </b-td>
                </b-tr>
            </template>
        </b-tbody>
        <ImgModal :dataset="dataset"/>
        <BuyModal :ProductCard="ProductCard" :productOffer="productOffer"/>
    </b-table-simple>
</template>

<script>
import PanelVid from "@/components/Search/ProductPanel/index"
import Chosen from "@/components/Metka/Chosen"
import mixitBuy from "@/mixins/Modal/buyProduct"
import mixitImg from "@/mixins/Modal/ProductImg"
import BuyModal from "@/components/Modal/buyProduct"
import BuyButton from "@/components/Products/Button/buyIndex"
import ImgModal from "@/components/Modal/ProductImg"
export default {
    mixins:[mixitImg,mixitBuy],
    components:{
        ImgModal,
        BuyModal,
        BuyButton,
        Chosen,
        PanelVid
    },
    props:{
        array:{}
    }
}
</script>

<style>

.w-100px{
    width: 50px;
}
.left-40{
    left: 42%;
}
.hover-true:hover .d-none-chosen{
    display: block!important;
}
</style>