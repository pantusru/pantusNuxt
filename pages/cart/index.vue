<template>
    <b-container>
        <h3>Корзина</h3>
        <b> Доступные способы доставки и оплаты вы сможете выбрать при оформлении заказа </b>
        <vTable/>
        <vButton/>

    </b-container>
</template>

<script>
import vButton from "@/components/Cart/Button/index"
import Modal from "@/components/Modal/authorization"
import vTable  from "@/components/Table/cart"
export default {
    components:{
        vTable,
        Modal,
        vButton
    },
}
</script>

