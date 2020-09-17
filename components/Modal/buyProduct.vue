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
                <div>1</div>
            </div>
            <div class="mb-2">
                <div class="mb-2"><b> Кол-во, шт:</b></div>
                <VInput @kolvo="SetKolvo" />
            </div>
            <div class="mb-2">
                <div><b> Стоимость:</b></div>
                <div>{{ stoimost }} Р</div>
            </div>
        </div>
        <template v-slot:modal-footer= "{close}">
            <b-button class="py-1 px-2 bg-danger border-0" @click="close">Купить</b-button>
        </template>
    </b-modal>
</template>

<script>
import VInput from  "@/components/Products/Input/kolvo"
export default {
    computed:{
        stoimost(){
            return this.kolvo * this.productOffer.prices
        }
    },
    data() {
        return {
            kolvo: 1
        }
    },
    props:{
        productOffer:{},
        ProductCard:{},
    },
    watch:{
        kolvo(){
            console.log(this.kolvo);
        }
    },
    methods:{
        hidden(){ // принудительно закрыть модальное окно
            this.kolvo = 1;
        },
        SetKolvo(kolvo){
            this.kolvo = kolvo.kolvo;
        }
    },
    components:{
        VInput,
    }
}
</script>

<style>

</style>