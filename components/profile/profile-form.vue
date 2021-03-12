<template>
  <form class="profile-form col">
    <h3 class="h3">Личные данные</h3>
    <base-input
      :id="'name'"
      text="Имя:"
      :validate-form="formData"
      :validate-input="formData.name"
      class-input="profile-input"
      :name="'name'"
    />
    <base-input
      :id="'surname'"
      text="Фамилия:"
      :validate-form="formData"
      :validate-input="formData.surname"
      class-input="profile-input"
      :name="'surname'"
    />
    <base-input
      :id="'patronymic'"
      text="Отчество:"
      :validate-form="formData"
      :validate-input="formData.patronymic"
      class-input="profile-input"
      :name="'patronymic'"
    />
    <base-input
      :id="'telephone'"
      text="Телефон:"
      :validate-form="formData"
      :validate-input="formData.telephone"
      class-input="profile-input"
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
