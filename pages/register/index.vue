<template>
  <div class="container">
    <form class="register-form">
      <div class="register-form-type-user">
        <h3 class="h3">Зарегистрироваться как:</h3>
        <div class="row-gutters">
          <BaseRadio
            :id="'typeUserRetail'"
            checked
            name="typeUser"
            :value="'retail'"
            :validate-form="formData"
            :validate-input="formData.type"
            :text="'Розничный покупатель'"
          />
          <BaseRadio
            :id="'typeUserWholesale'"
            name="typeUser"
            value="wholesale"
            :validate-form="formData"
            :validate-input="formData.type"
            :text="'Оптовый покупатель'"
          />
        </div>
      </div>
      <div class="register-form-user-data">
        <base-input
          id="name"
          :validate-input="formData.name"
          :validate-form="formData"
          text="Имя:"
        />
        <base-input
          id="surname"
          :validate-input="formData.surname"
          :validate-form="formData"
          text="Фамилия:"
        />
        <base-input
          id="email"
          :validate-input="formData.email"
          :validate-form="formData"
          text="Email:"
        />
        <base-input
          id="password"
          type="password"
          :validate-input="formData.password"
          :validate-form="formData"
          text="Пароль:"
        />
        <base-input
          id="passwordRepeat"
          type="password"
          :validate-input="formData.passwordRepeat"
          :validate-form="formData"
          text="Повторите Пароль:"
        />
        <base-input
          id="telephone"
          :validate-input="formData.telephone"
          :validate-form="formData"
          text="Номер телефона:"
        />
        <div v-if="(formData.type.value = 'wholesale')"></div>
        <!--        <div class="row">-->
        <!--          <input v-model="formData.checkbox.value" type="checkbox" />-->
        <!--          <p style="width: 25%">-->
        <!--            Я принимаю условия Соглашения сторон и соглашаюсь на обработку-->
        <!--            персональных данных, размещаемых на pantus.ru-->
        <!--          </p>-->
        <!--          <base-error :validate-input="formData.checkbox" />-->
        <!--        </div>-->
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
import BaseError from '~/components/base/error/base-error.vue'
import BaseRadio from '~/components/base/input/base-radio.vue'

export default Vue.extend({
  name: 'PageRegister',
  components: { BaseRadio, BaseError, BaseInput },
  setup() {
    return { ...RegisterForm() }
  },
})
</script>
