<template>
    <b-form>
        <div class="mb-2">Товары: {{stoimost}} Р </div>
        <div class="mb-4">Доставка: {{dostavka}}р</div>
        <h3>Итог {{ stoimost + dostavka }}Р </h3>
        <b-button @click="formGo" class="bg-danger border-0">Отправить заказ</b-button>
    </b-form>
</template>

<script>
export default {
    inject:["$v"],
    data() {
        return {
            dostavka: 0,
        }
    },
    methods:{
        formGo(){
            this.$v.Form.$touch();
        }
    },
    computed:{
        stoimost(){
            return this.$store.getters["Cart/CartAll/GetSymmaAll"]
        }
    }
}
</script>

