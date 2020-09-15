<template>
    <b-form class="pt-3">
        <vInput items="Фамилия" name="Surname" :error="error['Surname']" />
        <vInput items="Имя"  name="Name" :error="error['Name']" />
        <vInput Vmask="+7(###) ###-##-##" items="Телефон" name="Telephone" :error="error['Telephone']"/>
        <vInput :slots="true" items="Город"  name="Town" :error="error['Town']">
            <Town name="Town"/>
        </vInput>
    </b-form>
</template>

<script>
import vInput from "@/components/Order/Input/Input"
import Town from "@/components/Order/Input/Town"
import mixitError from "@/mixins/Form/order/contact/error"
import mixitValid from "@/mixins/Form/order/contact/validator"
export default {
    mixins:[mixitError,mixitValid],
    computed:{
        Form(){
            return this.$store.getters["Order/Form/GetContact"];
        }
    },
    components:{
        vInput,
        Town
    },
    provide(){
        return{
            $v: this.$v,
            VuexSrc: this.Form
        }
    }
}
</script>

<style>

</style>