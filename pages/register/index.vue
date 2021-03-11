<template>
  <div class="container">
    <form class="register-form">
      <div class="register-form-type-user">
        <h3 class="h3">Зарегистрироваться как:</h3>
        <div class="row-gutters">
          <BaseRadio
            :id="'typeUserRetail'"
            :checked="true"
            :class-item="'register-form-radio-items'"
            name="typeUser"
            :value="'retail'"
            :validate-form="formDataRetail"
            :validate-input="formDataRetail.type"
            :text="'Розничный покупатель'"
          />
          <BaseRadio
            :id="'typeUserWholesale'"
            name="typeUser"
            value="wholesale"
            :validate-form="formDataRetail"
            :validate-input="formDataRetail.type"
            :text="'Оптовый покупатель'"
          />
        </div>
      </div>
      <div class="register-form-user-data">
        <base-input
          id="name"
          :class-input="'register-form-input'"
          :validate-input="formDataRetail.name"
          :validate-form="formDataRetail"
          text="Имя:"
        />
        <base-input
          id="surname"
          :class-input="'register-form-input'"
          :validate-input="formDataRetail.surname"
          :validate-form="formDataRetail"
          text="Фамилия:"
        />
        <base-input
          id="email"
          :class-input="'register-form-input'"
          :validate-input="formDataRetail.email"
          :validate-form="formDataRetail"
          text="Email:"
        />
        <base-input
          id="password"
          :class-input="'register-form-input'"
          type="password"
          :validate-input="formDataRetail.password"
          :validate-form="formDataRetail"
          text="Пароль:"
        />
        <base-input
          id="passwordRepeat"
          :class-input="'register-form-input'"
          type="password"
          :validate-input="formDataRetail.passwordRepeat"
          :validate-form="formDataRetail"
          text="Повторите Пароль:"
        />
        <base-input
          id="telephone"
          :class-input="'register-form-input'"
          :validate-input="formDataRetail.telephone"
          :validate-form="formDataRetail"
          text="Номер телефона:"
        />
        <div v-if="formDataRetail.type.value === 'wholesale'">
          <base-input
            :id="'organization'"
            :class-input="'register-form-input'"
            :name="'organization'"
            :validate-input="formDataWholesale.organization"
            :text="'Названия организации'"
          />
          <base-input
            :id="'address'"
            :class-input="'register-form-input register-form-textarea'"
            :components-name="'textarea'"
            :name="'address'"
            :validate-input="formDataWholesale.address"
            :text="'Адрес: '"
          />
          <base-input
            :id="'inn'"
            :class-input="'register-form-input'"
            :name="'inn'"
            :validate-input="formDataWholesale.inn"
            :text="'Инн: '"
          />
        </div>
        <CheckboxDataUser :validate-input="formDataRetail.checkbox" />
        <button
          class="button link-hover-button register-form-button"
          @click.prevent="registerValidateForm"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseInput from '~/components/base/input/base-input.vue'
import { RegisterForm } from '~/composition/register/register-form'
import BaseRadio from '~/components/base/input/base-radio.vue'
import CheckboxDataUser from '~/components/register/checkbox-data-user.vue'

export default Vue.extend({
  name: 'PageRegister',
  components: { CheckboxDataUser, BaseRadio, BaseInput },
  setup() {
    return { ...RegisterForm() }
  },
})
</script>
<style lang="sass">
@import "assets/sass/register/register-form"
</style>
