<template>
  <form class="profile-form col">
    <h3 class="h3">Личные данные</h3>
    <base-input
      text="Имя:"
      :validate-form="formData"
      :validate-input="formData.name"
      class-input="profile-input"
      :id="'name'"
      :name="'name'"
    />
    <base-input
      text="Фамилия:"
      :validate-form="formData"
      :validate-input="formData.surname"
      class-input="profile-input"
      :id="'surname'"
      :name="'surname'"
    />
    <base-input
      text="Отчество:"
      :validate-form="formData"
      :validate-input="formData.patronymic"
      class-input="profile-input"
      :id="'patronymic'"
      :name="'patronymic'"
    />
    <base-input
      text="Телефон:"
      :validate-form="formData"
      :validate-input="formData.telephone"
      class-input="profile-input"
      :id="'telephone'"
      :name="'telephone'"
    />
    <button
      class="profile-button button link-hover-button"
      @click.prevent="profileValidateForm"
    >
      Изменить
    </button>
  </form>
</template>

<script lang="ts">
import { ProfileForm } from '@/composition/profile/profile-form'
import Vue from 'vue'
import BaseInput from '~/components/base/input/base-input.vue'
export default Vue.extend({
  name: 'ProfileForm',
  components: { BaseInput },
  setup() {
    return { ...ProfileForm() }
  },
})
</script>

<style lang="sass">
@import "assets/sass/profile/profile.sass"
</style>
