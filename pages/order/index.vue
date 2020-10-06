<template>
    <b-container>
        <h3 class="mb-5">Мой заказ</h3>
        <b-row>
            <b-col cols="6">
                <h5 class="mb-2">Контактное лицо</h5>
                <Contact class="pr-5"></Contact>
            </b-col>
            <b-col cols="6">
                <h3 class="mb-2">Споособ оплаты</h3>
                <Payment></Payment>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="6" class="mt-5">
                <h3 class="mb-2">Споособ доставки</h3>
                <Payment></Payment>
            </b-col>
            <b-col cols="6" class="mt-5">
                <Product></Product>
            </b-col>
        </b-row>     
    </b-container>
</template>

<script>
import mixitValid from "@/mixins/Form/order/contact/validator"
import Contact from "@/components/Order/Form/contact"
import Payment from "@/components/Order/Form/payment"
import Product from "@/components/Order/Form/product"
export default {
    mixins:[mixitValid],
    async fetch({store}){
        store.dispatch("Order/Payment/Index/_Payment");        
    },
    middleware({ store, redirect }) {
        if(true){ // ПОльзователь не авторизован
            // return redirect('/cart?reg=true');
        }
    },
    components:{
        Contact,
        Payment,
        Product
    },
    computed:{
        Form(){
            return this.$store.getters["Order/Form/GetContact"];
        },
    },
    provide(){
        return{
            $v: this.$v,
        }
    }
}
</script>

