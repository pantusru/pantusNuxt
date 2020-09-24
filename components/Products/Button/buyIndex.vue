<template>
    <div>
        <b-button v-on="$listeners" v-if="!userBasket"  class="py-1 px-2 bg-danger border-0 fz-5_5">Купить</b-button>
        <div class="d-flex justify-content-end align-items-center" v-if="userBasket" >
            <b-button 
                v-on="$listeners"
                @mouseover="text = 'Добавить'"
                @mouseout="text = 'В корзине'"
                class="text-danger py-1 px-1 border-danger bg-light bg-link-danger link-light fz-5_5">
                    {{ text }}
                </b-button>
                <b-button @click="deleteCartProduct" class=" border-0 text-danger ml-1 py-0  px-1 bg-transparent fz-5_5">X</b-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userBasket: false,
            text: "В корзине",
        }
    },
    props:{
        idsProduct:{
            default: null,
        }
    },
    methods:{
        deleteCartProduct(){
            let index = this.CartProduct.findIndex(s => s.ProductOffer.id == this.idsProduct);
            console.log(index);
            this.userBasket = false;
            this.$store.commit("Cart/CartAll/DeleteCartProduct", index);
        }
    },
    computed:{
        CartProduct(){
            return this.$store.getters["Cart/CartAll/GetCartProduct"];
        }
    },
    created(){ // ПРОВЕРКА ЕСЛИ ЛИ ТОВАР В КОРЗИНЕ
        for (const key in this.CartProduct ) {
            if(this.CartProduct[key].ProductOffer.id === this.idsProduct ){
                this.userBasket = true;
                this.$emit('PropskolvoCart',
                    this.CartProduct[key].kolvo,
                )
            }
        }
    }
}
</script>

<style>

</style>