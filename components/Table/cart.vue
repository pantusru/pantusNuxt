<template>
          <b-table class="mt-4 text-center"
        :fields="fields"
        :items="CartProduct"
        bordered	
        >
            <template v-slot:cell(sku)="data">
                <template>
                    {{ data.item.ProductCard.sku.original}}
                </template>
            </template>
            <template v-slot:cell(name)="data">
                {{ data.item.ProductCard.name}}
            </template>
            <template v-slot:cell(img)="data">
                <div v-if="data.item.ProductCard.ProductCardImage.url">
                    <b-icon-camera-fill v-b-modal="toString(data.item.id)"  class="cursor-pointer"></b-icon-camera-fill>
                    <ImgModal :dataset="data.item" :idModal="toString(data.item)"/>
                </div>
            </template>
            <template v-slot:cell(price)="data">
                {{ data.item.ProductOffer.prices.wholesale}} Р
            </template>
            <template v-slot:cell(quantity)="data">
                {{ data.item.ProductOffer.quantity}}
            </template>
            <template v-slot:cell(count)="data">
                <vInput :AddClassInput="'col-7'" class="ml-auto mr-auto" :kolvoProps="data.item.kolvo"  :array="data.item" @kolvo="Setkolvo" />
            </template>
            <template v-slot:cell(symma)="data">
                {{  Number(data.item.kolvo) * data.item.ProductOffer.prices.wholesale}} Р
            </template>
             <template v-slot:cell(Delete)="data">
                <b-button @click="deleteProduct(data.index)" class="bg-danger border-0 py-1">X</b-button>
            </template>
        </b-table>
</template>

<script>
import ImgModal from "@/components/Modal/ProductImg"
import vInput from "@/components/Products/Input/kolvo"
export default {
    data() {
        return {
            fields:[
                {key:"sku" ,label:'Артикул'},
                {key:"name" ,label:'Название товара'},
                {key:"img" ,label:''},
                {key:"price" ,label:'Цена'},
                {key:"quantity" ,label:'Остаток, шт'},
                {key:"count" ,label:'Кол-во, шт'},
                {key:"symma" ,label:'Сумма'},
                {key:"Delete" ,label:''},
            ]
        }
    },
    computed: {
        CartProduct() {
            return this.$store.getters["Cart/CartAll/GetCartProduct"]; 
        },
    },
    methods:{
        Setkolvo(data){
            this.$store.commit("Cart/CartAll/SetKolvoProduct" , {data:data.array ,value: data.kolvo})
        },
        deleteProduct(data){
            console.log(data);
            this.$store.commit("Cart/CartAll/DeleteCartProduct" , data);
        }
    },
    components:{
        vInput,
        ImgModal
    }
}
</script>

<style>

</style>