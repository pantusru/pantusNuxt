<template>
    <b-form>
        <div class="mb-2">Товары: {{stoimost}} Р </div>
        <div class="mb-4">Доставка: {{GetCostDostavka}}р</div>
        <h3>Итог {{ stoimost + GetCostDostavka }}Р </h3>
        <b-button @click="formGo" class="bg-danger border-0">Отправить заказ</b-button>
    </b-form>
</template>

<script>
export default {
    props:{
      $v:{}
    },
    methods:{
        formGo(){ // Отправить заказ
          this.$v.Form.$touch()
        }
    },
    computed:{
        stoimost(){
            return this.$store.getters["Cart/CartAll/GetSymmaAll"]
        },
        GetCostDostavka(){
          return this.$store.getters["Order/Form/GetCostDostavka"]
        },
      GetContact(){
        return  this.$store.getters["Order/Form/GetContact"]
      }
    }
}
</script>

