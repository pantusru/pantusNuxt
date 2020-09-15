<template>
    <b-form class="pt-3">
        <vInput items="Фамилия" name="Surname" :error="error['Surname']" />
        <vInput items="Имя"  name="Name" :error="error['Name']" />
        <vInput Vmask="+7(###) ###-##-##" items="Телефон" name="Telephone" :error="error['Telephone']"/>
        <vInput :slots="true" items="Город"  name="Name" :error="error['Name']">
            
        </vInput>
    </b-form>
</template>

<script>
import vInput from "@/components/Order/Input"
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
        vInput
    },
    created(){
        console.log(this.$v)
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