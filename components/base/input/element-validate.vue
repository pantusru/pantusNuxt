<template>
  <component
    :is="componentName"
    v-bind="$listeners"
    :class="[!validateInput.validate ? classError : '']"
    @input="onSwitch($event.target.value)"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ValidateInput } from '@/composition/_validate/validate-input'
import {
  TypeValidateInput,
  TypeFormData,
} from '@/composition/_validate/validate-type'
import { InputPropsInterface } from '@/interface/base/props/input-props.interface'
export default Vue.extend({
  name: 'InputValidate',
  props: {
    componentName: {
      type: String,
      default: 'input',
    },
    validateForm: {
      type: Object as () => PropType<TypeFormData>,
      required: true,
    },
    validateInput: {
      type: Object as () => PropType<TypeValidateInput>,
      required: true,
    },
    classError: {
      type: String,
      default: '',
    },
  },
  setup(props: InputPropsInterface) {
    if (props.validateInput) {
      return { ...ValidateInput(props.validateInput) }
    }
  },
})
</script>
