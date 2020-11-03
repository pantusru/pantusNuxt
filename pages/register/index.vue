<template>
  <b-form class="mb-3">
      <b-container>
          <h3 class="mb-3">Зарегистрироваться как:</h3>
            <radioForm  v-bind:buyer.sync="buyer" />
            <b-form-group>
                <VInput items="Фамилия:" name="surname" :error="error.surname"></VInput>
                <VInput items="Имя:" name="name" :error="error.name"/>
                <VInput items="Email:" name="email" :error="error.email"/>
                <VInput type="password" items="Пароль:" name="password" :error="error.password"/>
                <VInput type="password" items=" Повторите Пароль:" name="password2" :error="error.password2"/>
                <VInput  Vmask="+7(###) ###-##-##" items="Мобильный телефон" name="telephone" :error="error.telephone">

                </VInput>
            </b-form-group>
            <b-form-group v-if="buyer === 'Wholesale'">
                <VInput :slots="true" items="Страна:" name="country" :error="error.country">
                    <MSelect name="country" />
                </VInput>
                <VInput :slots="true" items="Физический адрес" name="address" :error="error.address">
                    <b-form-textarea   v-model="$v.Form.address.$model" no-resize type="text" id="address" size="lg"></b-form-textarea>
                </VInput>
                <VInput items="Название организаци" name="organization" :error="error.organization"/>
                <VInput Vmask="############"  items="Инн" name="inn" :error="error.inn">
                </VInput>
            </b-form-group>
            <VInput :slots="true" name="checbox" :error="error.checbox">
                <b-form-checkbox v-model="$v.Form.checbox.$model">
                    <p>Я принимаю условия <nuxt-link to="">Соглашения сторон</nuxt-link> и соглашаюсь
                        на обработку персональных данных, размещаемых на <nuxt-link to="">pantus.ru</nuxt-link>
                    </p>
                </b-form-checkbox>
            </VInput>
            <Buttons/>
      </b-container>
  </b-form>
</template>

<script>
import MixinsError from "@/mixins/Form/register/error"
import MixinsValidations from "@/mixins/Form/register/validator"
import VInput from "@/components/register/index"
import radioForm from "@/components/register/radioForm"
import Buttons from "@/components/register/button"
import MSelect from "@/components/register/select"
export default {
    middleware:'CheckUser',
    mixins:[MixinsError, MixinsValidations],
    watch:{
        $v(){ // ХЗ БЕЗ ЭТОГО ВЫДАЕТ ОШИБКУ ЧТО МОДЕЛЬ НЕ НАЙДЕНА =(

        }
    },
    components:{
        VInput,
        radioForm,
        Buttons,
        MSelect
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
