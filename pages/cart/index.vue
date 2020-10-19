<template>
    <b-container>
        <h3>Корзина</h3>
        <b> Доступные способы доставки и оплаты вы сможете выбрать при оформлении заказа </b>
        <vTable class="d-none d-lg-block"/>
        <VBlogCart class="d-flex d-lg-none"/>
        <vButton class="mt-3"/>

    </b-container>
</template>

<script>
import vButton from "@/components/Cart/Button/index"
import Modal from "@/components/Modal/authorization"
import vTable  from "@/components/Table/cart"
import VBlogCart from "@/components/Cart/Blog/index"
export default {
    components:{
        vTable,
        Modal,
        vButton,
        VBlogCart
    },
}
</script>

