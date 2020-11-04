<template>
    <b-form class="pt-3">
        <vInput items="Фамилия" name="surname" :error="error['surname']" />
        <vInput items="Имя"  name="name" :error="error['name']" />
        <vInput Vmask="+7(###) ###-##-##" items="Телефон" name="telephone" :error="error['telephone']"/>
        <Town items="Город"  name="Town" :error="error['Town']"/>
    </b-form>
</template>

<script>
import mixitError from "@/mixins/Form/order/contact/error"
import vInput from "@/components/Order/order-input/index"
import Town from "@/components/Order/order-input/Town"
export default {
    mixins:[mixitError],
    components:{
        vInput,
        Town
    },
}
</script>
