<template>
    <b-modal :id="'buy'" @show="ShowModal">
        <template v-slot:modal-header  = "{close}">
            <h5>Товар будет добавлен в корзину</h5>
            <b-button class="font-weight-bolder" variant="outline-danger" @click="close()">
                X
            </b-button>
        </template>
        <div v-if="LinkProducts != undefined">
            <div class="mb-2">
                <div><b>Название:</b></div>
                <div>{{  LinkProducts.name }}</div>
            </div>
            <div class="mb-2">
                <div><b>Артикул:</b></div>
                <div>{{ LinkProducts.sku.original }}</div>
            </div>
            <div class="mb-2">
                <div><b> Цена:</b></div>
                <div>{{ LinkOffer.prices }} Р</div>
            </div>
            <div class="mb-2">
                <div><b> Кратность:</b></div>
                <div>{{ LinkOffer.multiplicity }}</div>
            </div>
            <div class="mb-2">
                <div class="mb-2"><b> Кол-во, шт:</b></div>
                <VInput @kolvo="SetCount" :AddClassForm="'col-6 col-md-4'" :kolvoProps="count" :multiplicity="LinkOffer.multiplicity" />
            </div>
            <div class="mb-2">
                <div><b> Стоимость:</b></div>
                <div>{{ stoimost }} Р</div>
            </div>
        </div>
        <template v-slot:modal-footer= "">
          <base-button class="py-1 px-2" @click="buy" text="Купить"></base-button>
        </template>
    </b-modal>
</template>

<script>
import VInput from  "@/components/Products/Input/kolvo"
import BaseButton from "@/components/Base/base-button";
export default {
    data() {
        return {
            close: false,
            count: "",
        }
    },
    methods:{
        ShowModal(){
            if(this.CheckCart === true){// Есть в корзине
                this.count = this.$store.getters
                    ["Cart/CartAll/GetCartProductId"]
                    (this.LinkOffer.id)[0].kolvo

            }else{// Нет в корзине
                this.count = this.LinkOffer.multiplicity;
            }
        },
        SetCount(kolvo){ // Emit
            this.count = kolvo.kolvo;
        },
        // Кнопка купить
        buy(){
            let Index  = this.$store.getters
                ["Cart/CartAll/GetCartProduct_offersIndex"]
                (this.LinkOffer.id);
                if(this.CheckCart == false){ //Добавить товар в корзину
                    // УДАЛЯЕТСЯ ПОТОМ СЕЙЧАС ДЛЯ ТЕСТОВ
                    let data = {};
                    data.kolvo = this.count;
                    data.ProductOffer = {};
                    data.ProductOffer.id = this.LinkOffer.id;
                    data.ProductOffer.prices = this.LinkOffer.prices;
                    // УДАЛЯЕТСЯ ПОТОМ СЕЙЧАС ДЛЯ ТЕСТОВ
                    this.$store.commit("Cart/CartAll/PushCartProduct" , data);
                    this.$bvModal.hide('buy');
                }else{ // ИЗМЕНИТЬ КОЛИЧЕСТВО ТОВАРА В КОРЗИНЕ
                    this.$store.commit("Cart/CartAll/SetKolvoProduct" , {index:Index ,value: this.count});
                    // this.$store.commit("Cart/CartAll/SetCheckCartCount" ,Index);
                    this.$bvModal.hide('buy');
                }
        },
    },
    components:{
      BaseButton,
        VInput,
    },
    computed:{
        stoimost(){
            return this.count * this.LinkOffer.prices
        },
        LinkProducts(){
            return this.$store.getters["Modal/GetModaBuyLinkProduct"]
        },
        LinkOffer(){
            return this.$store.getters["Modal/GetModaBuyLinkOffer"]
        },
        CheckCart(){
            return this.$store.getters["Modal/GetCheckCart"]
        },
    },
}
</script>

