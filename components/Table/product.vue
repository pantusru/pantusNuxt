<template>
    <b-table-simple
        class="text-center fz-5_5"
        >
            <PanelVid :CheckAnalogs="CheckAnalogs"/>
        <b-tbody>
            <template v-for="product in array"> 
                <b-tr :key="product.ProductCard.id" class="hover-true">
                    <b-td :rowspan="product.productOffer.length+1"> 
                        <nuxt-link class="text-576b77 link-danger font-weight-bold" :to="product.ProductCard.brand.id.toString()">{{ product.ProductCard.brand.name }} </nuxt-link> 
                    </b-td>
                    <b-td :rowspan="product.productOffer.length+1"> <nuxt-link class="text-576b77 link-danger" :to="product.ProductCard.id.toString()">{{product.ProductCard.sku.original}}</nuxt-link> </b-td>
                    <b-td :rowspan="product.productOffer.length+1" v-if="CheckAnalogs== false" class="d-none d-md-table-cell"> 
                        <div class="w-50px">
                            <ImgGetModal :product="product" />
                        </div>
                    </b-td>
                    <b-td :rowspan="product.productOffer.length+1">
                        <nuxt-link class="text-576b77 link-danger" :to="product.ProductCard.id.toString()">  {{ product.ProductCard.name }} </nuxt-link>
                    </b-td>
                    <b-td class="position-absolute border-0 left-42">
                        <Chosen v-if="CheckAnalogs == false && CheckUser == true" :id="product.ProductCard.id"/>
                    </b-td>
                </b-tr>
                <b-tr class="hover-true border-bottom" v-for="offer in product.productOffer" :key="offer.id">
                    <b-td class="border-top-0 text-555" >{{ offer.supplier.name }}</b-td>
                    <b-td  class="border-top-0 text-00b91e">{{ offer.quantity }}</b-td>
                    <b-td  class="border-top-0 text-555 d-none d-md-table-cell">{{ offer.supplier.deliveryDelay }}</b-td>
                    <b-td  class="border-top-0 text-555 fz-5 font-weight-bold">{{ offer.prices }} Р</b-td>
                    <b-td  class="border-top-0"> 
                        <BuyButton  
                            :LinkOffer="offer" 
                            :LinkProduct="product.ProductCard"
                        /> 
                    </b-td>
                </b-tr>
            </template>
        </b-tbody>
        <ImgModal v-if="CheckAnalogs == false"/>
        <BuyModal v-if="CheckAnalogs == false"/>
    </b-table-simple>
</template>

<script>
import ImgGetModal from "@/components/Products/Product/Element/img"
import PanelVid from "@/components/Search/ProductPanel/table" // Панель
import Chosen from "@/components/Metka/Chosen" // Метка избранный товар
import BuyButton from "@/components/Products/Button/buyIndex" // Кнопка открыть модалку купить товар
import ImgModal from "@/components/Modal/ProductImg" // Компонент модалка изображения
import BuyModal from "@/components/Modal/buyProduct"// Компонент модалка купить
export default {
    components:{
        ImgModal,
        BuyModal,
        BuyButton,
        Chosen,
        PanelVid,
        ImgGetModal
    },
    props:{
        array:{},   
        CheckAnalogs:{
            default: false,
        }
    },
    computed:{
        CheckUser(){
            return this.$store.getters["User/CheckUser"]
        }
    }
}
</script>

<style> 
.hover-true:hover .d-none-chosen{
    display: block!important;
}
</style>