<template>
    <b-modal :id="toString(modalId)">
        <template v-slot:modal-header  = "{close}">
            <h5>Товар будет добавлен в корзину</h5>
            <b-button class="font-weight-bolder" variant="outline-danger" @click="close()">
                X
            </b-button>
        </template>
        <div class="mb-2">
            <div><b>Название:</b></div>
            <div>{{ dataset.ProductCard.name }}</div>
        </div>
        <div class="mb-2">
            <div><b>Артикул:</b></div>
            <div>{{ dataset.ProductCard.sku.original }}</div>
        </div>
        <div class="mb-2">
            <div><b> Цена:</b></div>
            <div>{{ dataset.ProductOffer.prices.wholesale }} Р</div>
        </div>
        <div class="mb-2">
            <div><b> Кратность:</b></div>
            <div>1</div>
        </div>
        <div class="mb-2">
            <div class="mb-2"><b> Кол-во, шт:</b></div>
            <VInput @kolvo="SetKolvo" />
        </div>
        <template v-slot:modal-footer= "{close}">
            <b-button class="py-1 px-2 bg-danger border-0" @click="close">Купить</b-button>
        </template>
    </b-modal>
</template>

<script>
import VInput from  "@/components/Products/Input/kolvo"
export default {
    data() {
        return {
            kovlo: 1
        }
    },
    props:{
        modalId:{},
        dataset:{},
    },
    methods:{
        hidden(){ // принудительно закрыть модальное окно
            this.$nextTick(() => {
                this.$bvModal.hide(`${this.modalId}`);
            })
        },
        SetKolvo(kovlo){
            this.kovlo = kovlo;
        }
    },
    components:{
        VInput,
    }
}
</script>

<style>

</style>