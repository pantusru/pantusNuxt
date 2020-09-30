<template>
    <b-modal :id="'buy'" @show="ShowModal">
        <template v-slot:modal-header  = "{close}">
            <h5>Товар будет добавлен в корзину</h5>
            <b-button class="font-weight-bolder" variant="outline-danger" @click="close()">
                X
            </b-button>
        </template>
        <div v-if="Product != undefined">
            <div class="mb-2">
                <div><b>Название:</b></div>
                <div>{{  Product.ProductCard.name }}</div>
            </div>
            <div class="mb-2">
                <div><b>Артикул:</b></div>
                <div>{{ Product.ProductCard.sku.original }}</div>
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
                <VInput @kolvo="SetCount" :kolvoProps="count" :multiplicity="LinkOffer.multiplicity" />
            </div>
            <div class="mb-2">
                <div><b> Стоимость:</b></div>
                <div>{{ stoimost }} Р</div>
            </div>
        </div>
        <template v-slot:modal-footer= "">
            <b-button class="py-1 px-2 bg-danger border-0" @click="buy">Купить</b-button>
        </template>
    </b-modal>
</template>

<script>
import VInput from  "@/components/Products/Input/kolvo"
export default {
    data() {
        return {
            close: false,
            count: "",
            Product: undefined,
        }
    },
    methods:{
        ShowModal(){
            this.Product = this.$store.getters[this.GetModaBuyNameGettersModal](this.IdProducts);
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
        VInput,
    },
    computed:{
        stoimost(){
            return this.count * this.LinkOffer.prices
        },
        IdProducts(){
            return this.$store.getters["Modal/GetModaBuyIdProduct"]
        },
        LinkOffer(){
            return this.$store.getters["Modal/GetModaBuyLinkOffer"]
        },
        CheckCart(){
            return this.$store.getters["Modal/GetCheckCart"]
        },
        GetModaBuyNameGettersModal(){
            return this.$store.getters["Modal/GetModaBuyNameGettersModal"]
        }
    },
}
</script>

