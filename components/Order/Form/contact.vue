<template>
    <b-form class="pt-3">
        <vInput items="Фамилия" name="Surname" :error="error['Surname']" />
        <vInput items="Имя"  name="Name" :error="error['Name']" />
        <vInput Vmask="+7(###) ###-##-##" items="Телефон" name="Telephone" :error="error['Telephone']"/>
        <Town items="Город"  name="Town" :error="error['Town']"/>
    </b-form>
</template>

<script>
import mixitError from "@/mixins/Form/order/contact/error"
import vInput from "@/components/Order/Input/Input"
import Town from "@/components/Order/Input/Town"
export default {
    mixins:[mixitError],
    components:{
        vInput,
        Town
    },
}
</script>

<style>

</style>