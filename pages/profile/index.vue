<template>
  <div class="container">
    <form class="profile-form">
      <base-input
        text="Имя:"
        :validate-form="formData"
        :validate-input="formData.name"
      />
      <base-input
        text="Фамилия:"
        :validate-form="formData"
        :validate-input="formData.surname"
      />
      <base-input
        text="Отчество:"
        :validate-form="formData"
        :validate-input="formData.patronymic"
      />
      <base-input
        text="Телефон:"
        :validate-form="formData"
        :validate-input="formData.telephone"
      />
      <button
        class="profile-button button link-hover-button"
        @click.prevent="profileValidateForm"
      >
        Изменить
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { ProfileForm } from '@/composition/profile/profile-form'
import BaseInput from '~/components/base/input/base-input'
export default {
  name: 'PageProfile',
  components: { BaseInput },
  setup() {
    return { ...ProfileForm() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/profile/profile.sass"
</style>
