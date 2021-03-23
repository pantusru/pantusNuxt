<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules">
    <input v-model="value" type="text" />
    <vee-errors :errors="errors" />
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import VeeErrors from '~/components/base/vee-validate/vee-errors'
export default {
  name: 'VeeInput',
  components: {
    VeeErrors,
    ValidationProvider,
  },
}
</script>
