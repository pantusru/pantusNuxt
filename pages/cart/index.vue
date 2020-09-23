<template>
    <b-container>
        <h3>Корзина</h3>
        <b> Доступные способы доставки и оплаты вы сможете выбрать при оформлении заказа </b>
        <vTable/>
        <vButton/>

    </b-container>
</template>

<script>
import vButton from "@/components/Card/Button/index"
import Modal from "@/components/Modal/authorization"
import vTable  from "@/components/Table/cart"
export default {
    data() {
        return {
            checkGetModal: null,
        }
    },
    async fetch({store, query}){
        await store.dispatch("Cart/CartAll/_CartProduct");
    },
    methods:{
        ModalGet(){
            if(this.$route.query.reg != undefined){
                console.log(this.$bvModal);
                this.$bvModal.show("authorization");	
            }
        }
    },

    created(){
        this.ModalGet();
    },
    components:{
        vTable,
        Modal,
        vButton
    },
}
</script>

<style>

</style>