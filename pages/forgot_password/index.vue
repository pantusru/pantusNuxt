<template>
   <b-container>
       <p>Если вы забыли пароль, введите E-Mail.</p>
       <p>Контрольная строка для смены пароля, а также ваши регистрационные данные, будут высланы вам по E-Mail.</p>
        <b-row>
            <VInput items="Email:" name="Email" :error="error.Email"></VInput>
        </b-row>
        <b-button @click="ClickBnt" class="bg-danger border-0">Отправить</b-button>
   </b-container>
</template>

<script>
import { required, minLength, between,  alphaNum } from 'vuelidate/lib/validators'
import MixinsError from "@/mixins/form/forgot-password/error"
import MixinsValidations from "@/mixins/form/forgot-password/validator"
import VInput from "@/components/register/index"
export default {
    mixins:[MixinsError,MixinsValidations],
    middleware:'CheckUser',
    components:{
        VInput,
    },
    provide(){
        return{
            $v: this.$v,
        }
    },
    methods:{
        ClickBnt(){
            this.$v.Form.$touch();
            if(this.$v.Form.$error === false){
                // ЗАПРОС  НА СЕРВЕР
            }
        }
    }
}
</script>

