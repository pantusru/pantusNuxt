<template>
    <b-form>
        <div class="mb-2">Товары: 2000р</div>
        <div class="mb-4">Доставка: 0р</div>
        <h3>Итог 2000р</h3>
        <b-button @click="formGo" class="bg-danger border-0">Отправить заказ</b-button>
    </b-form>
</template>

<script>
export default {
    inject:["$v"],
    methods:{
        formGo(){
            this.$v.Form.$touch();
        }
    },
}
</script>

