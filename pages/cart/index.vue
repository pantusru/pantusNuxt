<template>
    <b-container>
        <h3>Корзина</h3>
        <b> Доступные способы доставки и оплаты вы сможете выбрать при оформлении заказа </b>
        <vTable/>
    </b-container>
</template>

<script>
import vTable  from "@/components/Table/cart"
export default {
    async fetch({store}){
        await store.dispatch("Cart/CartAll/_CartProduct");
    },
    created(){
        console.log(this.CartProduct);
    },
    components:{
        vTable
    }
}
</script>

<style>

</style>