<template>
  <form class="authorization-form">
    <base-input
      :id="'login'"
      :validate-form="formData"
      :validate-input="formData.login"
      class-input="authorization-input"
      class-item="authorization-item"
      class-label="authorization-label"
      text="Логин"
      placeholder="Введите ваш логин"
      :name="'login'"
    />
    <base-input
      :id="'password'"
      :name="'password'"
      type="password"
      :validate-form="formData"
      :validate-input="formData.password"
      class-input="authorization-input"
      class-item="authorization-item"
      class-label="authorization-label"
      text="Пароль"
      placeholder="Введите ваш пароль"
    />
    <button
      class="authorization-button link-hover-button"
      @click.prevent="authorizationValidateForm"
    >
      Авторизоваться
    </button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { AuthorizationForm } from '~/composition/authorization/authorization-form'
import BaseInput from '~/components/base/input/base-input.vue'

export default Vue.extend({
  name: 'AuthorizationForm',
  components: { BaseInput },
  setup() {
    return { ...AuthorizationForm() }
  },
})
</script>
