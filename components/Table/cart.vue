<template>
    <div>
           <ImgModal :dataset="dataset"/>
          <b-table class="mt-4 text-center"
        :fields="fields"
        :items="CartProduct"
        bordered
        hover
        thead-class="bg-light"
        >
            <template v-slot:cell(brand)="data">
                    {{ data.item.ProductCard.brand.name}}
            </template>
            <template v-slot:cell(sku)="data">
                    {{ data.item.ProductCard.sku.original}}
            </template>
            <template v-slot:cell(name)="data">
                {{ data.item.ProductCard.name}}
            </template>
            <template v-slot:cell(img)="data">
                <div v-if="data.item.ProductCard.ProductCardImage.url">
                    <b-icon-camera-fill @click="ModalImg(data.item)" class="cursor-pointer"></b-icon-camera-fill>
                </div>
            </template>
            <template v-slot:cell(price)="data">
                {{ data.item.ProductOffer.prices}} Р
            </template>
            <template v-slot:cell(supplier)="data">
                {{ data.item.ProductOffer.supplier.name}}
            </template>
            <template v-slot:cell(quantity)="data">
                {{ data.item.ProductOffer.quantity}}
            </template>
            <template v-slot:cell(count)="data">
                <vInput :AddClassInput="'col-9 p-0'" class="ml-auto mr-auto" :kolvoProps="data.item.kolvo"  :array="data.item" @kolvo="Setkolvo" />
            </template>
            <template v-slot:cell(symma)="data">
                {{  Number(data.item.kolvo) * data.item.ProductOffer.prices}} Р
            </template>
             <template v-slot:cell(Delete)="data">
                <b-button @click="deleteProduct(data.index)" class="bg-danger border-0 py-1">X</b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import mixitImg from "@/mixins/Modal/ProductImg"
import ImgModal from "@/components/Modal/ProductImg"
import vInput from "@/components/Products/Input/kolvo"
export default {
    mixins:[mixitImg],
    data() {
        return {
            fields:[
                {key:"brand" ,label:'Брэнд'},
                {key:"sku" ,label:'Артикул'},
                {key:"name" ,label:'Название товара'},
                {key:"img" ,label:''},
                 {key:"supplier" ,label:'Поставщик'},
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
            this.$store.commit("Cart/CartAll/SetKolvoProduct" , {data:data.array ,value: data.kolvo});
        },
        deleteProduct(data){
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