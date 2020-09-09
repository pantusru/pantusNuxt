<template>
  <b-form class="mt-4 mb-3">
      <b-container>
          <h3 class="mb-3">Зарегистрироваться как:</h3>
            <radioForm  v-bind:buyer.sync="buyer" />  
            <b-form-group>
                <VInput items="Фамилия:" name="surname" :error="error.surname"></VInput>
                <VInput items="Имя:" name="name" :error="error.name"/>
                <VInput items="Email:" name="email" :error="error.email"/>
                <VInput type="password" items="Пароль:" name="password" :error="error.password"/>    
                <VInput type="password" items=" Повторите Пароль:" name="password2" :error="error.password2"/>
                
                
                <div class="col-4 mb-2">
                    <label for="telephone">Мобильный телефон</label>
                    <b-form-input id="telephone" size="sm"></b-form-input>
                </div>
            </b-form-group>
            <b-form-group v-if="buyer === 'Wholesale'">
                <div class="col-4 mb-2">
                    <label for="country">Страна</label>
                      <!-- РЕШИТЬ ПРОБЛЕМУ!  -->
                </div>
                <VInput :slots="true" items="Физический адрес" name="address" :error="error.address">
                    <b-form-textarea  no-resize type="text" id="address" size="lg"></b-form-textarea>
                </VInput>
                <VInput items="Название организаци" name="organization" :error="error.organization"/>  
                <VInput items="Инн" name="inn" :error="error.inn"/>
            </b-form-group>
            <VInput :slots="true">
                <b-form-checkbox>
                    <p>Я принимаю условия <nuxt-link to="">Соглашения сторон</nuxt-link> и соглашаюсь
                        на обработку персональных данных, размещаемых на <nuxt-link to="">pantus.ru</nuxt-link>
                    </p>        
                </b-form-checkbox>
            </VInput>  
            <div class="col-4 text-center">
                <b-button size="md" class="bg-danger border-danger">Зарегистрироваться</b-button>
            </div>
      </b-container>
  </b-form>
</template>

<script>
import { required, minLength, between,  alphaNum } from 'vuelidate/lib/validators'
import MixinsError from "@/mixins/Form/register/error"
import MixinsValidations from "@/mixins/Form/register/validator"
import VInput from "@/components/register/index"
import radioForm from "@/components/register/radioForm"
export default {
    mixins:[MixinsError, MixinsValidations],
    watch:{
        async $v(){
            
        }
    },
    components:{
        VInput,
        radioForm,
    },
    provide(){
        return{
            $v: this.$v,
        }
    },
    data() {
        return {
            buyer: "Retail",
        }
    }
}
</script>

<style>

</style>