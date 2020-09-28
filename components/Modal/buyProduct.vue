<template>
    <b-modal :id="'buy'" @hidden="hidden">
        <template v-slot:modal-header  = "{close}">
            <h5>Товар будет добавлен в корзину</h5>
            <b-button class="font-weight-bolder" variant="outline-danger" @click="close()">
                X
            </b-button>
        </template>
        <div v-if="productOffer != undefined">
            <div class="mb-2">
                <div><b>Название:</b></div>
                <div>{{ ProductCard.name }}</div>
            </div>
            <div class="mb-2">
                <div><b>Артикул:</b></div>
                <div>{{ ProductCard.sku.original }}</div>
            </div>
            <div class="mb-2">
                <div><b> Цена:</b></div>
                <div>{{ productOffer.prices }} Р</div>
            </div>
            <div class="mb-2">
                <div><b> Кратность:</b></div>
                <div>{{ productOffer.multiplicity }}</div>
            </div>
            <div class="mb-2">
                <div class="mb-2"><b> Кол-во, шт:</b></div>
                <VInput @kolvo="SetKolvo" :kolvoProps="kovloProps" :multiplicity="productOffer.multiplicity" />
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
    computed:{
        stoimost(){
            return this.kolvo * this.productOffer.prices
        },
    },
    data() {
        return {
            kolvo: this.kovloProps,
            close: false,
        }
    },
    props:{
        productOffer:{},
        ProductCard:{},
        kovloProps: {
            default: 1,
        }
    },
    methods:{
        hidden(){ // принудительно закрыть модальное окно
            this.kolvo = 1;
        },
        SetKolvo(kolvo){ // Emit
            this.kolvo = kolvo.kolvo;
        },
        // Кнопка купить
        buy(){
            let Index  = this.$store.getters
                ["Cart/CartAll/GetCartProduct_offersIndex"]
                (this.productOffer.id);
                console.log(Index);
                if(Index == -1){ //Добавить товар в корзину       
                    let data = {};
                    data.kolvo = this.kolvo;
                    data.ProductOffer = {};
                    data.ProductOffer.id = this.productOffer.id;
                    console.log("data set");
                    this.$store.commit("Cart/CartAll/PushCartProduct" , data);
                    this.$bvModal.hide('buy');
                }else{ // ИЗМЕНИТЬ КОЛИЧЕСТВО ТОВАРА В КОРЗИНЕ
                    this.$store.commit("Cart/CartAll/SetKolvoProduct" , {index:Index ,value: this.kolvo});
                    this.$store.commit("Cart/CartAll/SetCheckCartCount" ,Index);
                    this.$bvModal.hide('buy');
                }
        }
    },
    components:{
        VInput,
    }
}
</script>

<style>

</style>