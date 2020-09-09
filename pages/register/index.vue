<template>
  <b-form class="mt-4 mb-3">
      <b-container>
          <h3 class="mb-3">Зарегистрироваться как:</h3>
            <b-form-radio-group v-model="buyer" class="mb-4">
                <b-form-radio name="some-radios" value="Retail">Розничный покупатель</b-form-radio>
                <b-form-radio name="some-radios" value="Wholesale">Оптовый покупатель</b-form-radio>
            </b-form-radio-group>
            <div class="mb-3">
                <h3 v-if="buyer === 'Retail'">Заполните данные о себе:</h3>
                <h3 v-if="buyer === 'Wholesale'">Заполните данные о себе и организаци:</h3>
            </div>
            
            <b-form-group>
                <VInput items="Фамилия" name="surname" :error="error.surname"></VInput>
                <VInput items="Имя" name="name" :error="error.name"/>
                <VInput items="Email" name="email" :error="error.email"/>
                <VInput type="password" items="Пароль" name="password" :error="error.password"/>    
                <VInput type="password" items=" Повторите Пароль" name="password2" :error="error.password2"/>
                
                
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
                <div class="col-4 mb-2">
                    <label for="organization">Название организаци:</label>
                    <b-form-input type="text" id="organization" size="sm"></b-form-input>
                </div>
                <!-- <VInput items="Инн" name="inn" :error="error.inn"/> -->
            </b-form-group>
            <div class="col-4 mb-2">
                <b-form-checkbox>
                    <p>Я принимаю условия <nuxt-link to="">Соглашения сторон</nuxt-link> и соглашаюсь
                        на обработку персональных данных, размещаемых на <nuxt-link to="">pantus.ru</nuxt-link>
                    </p>        
                </b-form-checkbox>
            </div>
            <div class="col-4 text-center">
                <b-button size="md" class="bg-danger border-danger">Зарегистрироваться</b-button>
            </div>
      </b-container>
  </b-form>
</template>

<script>
// this.error массив ошибок 
// this.$v валидация таблицы
import { required, minLength, between,  alphaNum } from 'vuelidate/lib/validators'
import MixinsError from "@/mixins/Form/register/error"
import MixinsValidations from "@/mixins/Form/register/validator"
import VInput from "@/components/register/index"
export default {
    mixins:[MixinsError, MixinsValidations],
    mounted(){  
        console.log(this.$v);
          console.log(this);
    },
    components:{
        VInput
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
    },
}
</script>

<style>

</style>