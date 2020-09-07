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
                <div class="col-4 mb-2">
                    <label for="surname">Фамилия:</label>
                    <b-form-input @change="check" v-model.trim="$v.Form.surname.$model" id="surname" size="sm"></b-form-input>
                    <div v-if="!$v.Form.surname.required && $v.Form.surname.$dirty"> Укажите вашу фамилию</div>
                </div>
                <div class="col-4 mb-2">
                    <label for="name">Имя:</label>
                    <b-form-input v-model.trim="$v.Form.name.$model" id="name" size="sm"></b-form-input>
                    <div v-if="!$v.Form.name.required && $v.Form.name.$dirty"> Укажите вашу Имя</div>
                </div>
                <div class="col-4 mb-2">
                    <label for="email">E-mail:</label>
                    <b-form-input id="email" size="sm"></b-form-input>
                </div>
                <div class="col-4 mb-2">
                    <label for="password">Пароль</label>
                    <b-form-input type="password" id="password" size="sm"></b-form-input>
                </div>
                <div class="col-4 mb-2">
                    <label for="password2">Подвердите пароль</label>
                    <b-form-input type="password" id="password2" size="sm"></b-form-input>
                </div>
                <div class="col-4 mb-2">
                    <label for="telephone">Мобильный телефон</label>
                    <b-form-input type="password" id="telephone" size="sm"></b-form-input>
                </div>
            </b-form-group>
            <b-form-group v-if="buyer === 'Wholesale'">
                <div class="col-4 mb-2">
                    <label for="country">Страна</label>
                      <!-- РЕШИТЬ ПРОБЛЕМУ!  -->
                </div>
                <div class="col-4 mb-2">
                    <label for="address">Фактический адрес:</label>
                    <b-form-textarea  no-resize type="text" id="address" size="lg"></b-form-textarea>
                </div>
                <div class="col-4 mb-2">
                    <label for="organization">Название организаци:</label>
                    <b-form-input type="text" id="organization" size="sm"></b-form-input>
                </div>
                <div class="col-4 mb-2">
                    <label for="inn">ИНН:</label>
                    <b-form-input type="text" id="inn" size="sm"></b-form-input>
                </div>
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
import { required, minLength, between,  alphaNum } from 'vuelidate/lib/validators'
export default {
    methods:{
        check(){
            console.log(this.$v.Form.surname);
        }
    },
    data() {
        return {
            buyer: "Retail",
            size: 1,
             Form: {
                surname: '',
                name: ''
            }
        }
    },
    validations() {
        if(this.buyer == "Retail"){
            return{
                Form:{
                    surname:{
                        required,
                    },
                    name:{
                        required,
                    },
                    email:{
                        required,
                    },
                    password:{
                        required,
                    } ,
                    password2:{

                    },
                    telephone:{
                        required,
                    }
                }
            }   
        }
        else{
            return{
                Form:{
                    surname:{
                        required,
                    },
                    name:{
                        required,
                    },
                    email:{
                        required,
                    },  
                    password:{
                        required,
                    } ,
                    password2:{
                        required,
                    },
                    telephone:{
                        required,
                    },
                    country:{
                        required,
                    },
                    address:{
                        required,
                    },
                    organization:{
                        required,
                    },
                    inn:{
                        required,
                    },



                }
            } 
        }
    }
}
</script>

<style>

</style>