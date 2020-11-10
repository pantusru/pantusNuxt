<template>
    <b-form class="pt-3">
        <vInput :$v="$v"  items="Фамилия" name="surname" :error="error['surname']" />
        <vInput :$v="$v"  items="Имя"  name="name" :error="error['name']" />
        <vInput :$v="$v" Vmask="+7(###) ###-##-##" items="Телефон" name="telephone" :error="error['telephone']"/>
        <Town :$v="$v"  items="Город"  name="Town" :error="error['Town']"/>
    </b-form>
</template>

<script>
import mixitError from "@/mixins/form/order/contact/error"
import vInput from "@/components/order/order-input/index"
import Town from "@/components/order/order-input/town"
export default {
    props:{
      $v:{},
    },
    mixins:[mixitError],
    components:{
        vInput,
        Town
    },
}
</script>
