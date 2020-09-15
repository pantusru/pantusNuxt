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
    </b-container>
</template>

<script>
import Contact from "@/components/Order/Form/contact"
import Payment from "@/components/Order/Form/payment"
export default {
    middleware({ store, redirect }) {
        if(true){ // ПОльзователь не авторизован
            // return redirect('/cart?reg=true');
        }
    },
    components:{
        Contact,
        Payment
    }
}
</script>

<style>

</style>