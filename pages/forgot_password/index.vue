<template>
   <b-container>
       <p>Если вы забыли пароль, введите E-Mail.</p>
       <p>Контрольная строка для смены пароля, а также ваши регистрационные данные, будут высланы вам по E-Mail.</p>
        <b-row>
            <VInput items="Email:" name="Email" :error="error.Email"></VInput>
        </b-row>
        <b-button class="bg-danger border-0">Отправить</b-button>
   </b-container>
</template>

<script>
import { required, minLength, between,  alphaNum } from 'vuelidate/lib/validators'
import MixinsError from "@/mixins/Form/forgotPassword/error"
import MixinsValidations from "@/mixins/Form/forgotPassword/validator"
import VInput from "@/components/register/index"
export default {
    mixins:[MixinsError,MixinsValidations],
    components:{
        VInput,
    },
    provide(){
        return{
            $v: this.$v,
        }
    },
}
</script>

<style>

</style>