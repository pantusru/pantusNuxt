<template>
    <b-table-simple
        class="text-center fz-5_5"
        >
        <b-tbody>
            <template v-for="product in array"> 
                <b-tr :key="product.ProductCard.id" class="hover-true">
                    <b-td :rowspan="product.productOffer.length+1"> 
                        <nuxt-link class="text-576b77 link-danger font-weight-bold" :to="product.ProductCard.brand.id.toString()">{{ product.ProductCard.brand.name }} </nuxt-link> 
                    </b-td>
                    <b-td :rowspan="product.productOffer.length+1"> <nuxt-link class="text-576b77 link-danger" :to="product.ProductCard.id.toString()">{{product.ProductCard.sku.original}}</nuxt-link> </b-td>
                    <b-td :rowspan="product.productOffer.length+1"> 
                        <div class="w-100px">
                            <b-img class="cursor-pointer" @click="ModalImg(product)" fluid :src="product.ProductCard.ProductCardImage.url"/>
                        </div>
                    </b-td>
                    <b-td :rowspan="product.productOffer.length+1">
                        <nuxt-link class="text-576b77 link-danger" :to="product.ProductCard.id.toString()">  {{ product.ProductCard.name }} </nuxt-link>
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
                        <BuyButton  
                            :idsProduct="offer.id" 
                            :product ="product.ProductCard"
                            :offer="offer"
                        />
                    </b-td>
                </b-tr>
            </template>
        </b-tbody>
        <ImgModal :dataset="DataImg"/>
        <BuyModal 
        :ProductCard="DataBuy.ProductCard" 
        :productOffer="DataBuy.productOffer" 
        :kovloProps="DataBuy.CartKolvo" 
    />
    </b-table-simple>
</template>

<script>

import PanelVid from "@/components/Search/ProductPanel/index" // Панель
import Chosen from "@/components/Metka/Chosen" // Метка избранный товар
import product_all from "@/mixins/GetModal/product_all" // Mixins для отображение модалок
import BuyButton from "@/components/Products/Button/buyIndex" // Кнопка открыть модалку купить товар
import ImgModal from "@/components/Modal/ProductImg" // Компонент модалка изображения
import BuyModal from "@/components/Modal/buyProduct"// Компонент модалка купить
export default {
    mixins:[product_all],
    data() {
        return {
            DataImg: undefined,
        }
    },
    methods:{
        ModalImg(data){
            this.DataImg = data;
            this.$bvModal.show('img');
        }
    },
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