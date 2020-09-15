<template>
    <b-container>
        <h3 class="mb-5">Мой заказ</h3>
        <h5 class="mb-2">Контактное лицо</h5>
        <b-row>
            <b-col cols="6">
                <Contact></Contact>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Contact from "@/components/Order/Form/contact"
export default {
    middleware({ store, redirect }) {
        if(true){ // ПОльзователь не авторизован
            // return redirect('/cart?reg=true');
        }
    },
    components:{
        Contact,
    }
}
</script>

<style>

</style>