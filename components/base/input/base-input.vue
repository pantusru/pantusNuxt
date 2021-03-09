<template>
  <div class="base-input-blog">
    <div class="base-input-item" :class="classItem">
      <label class="base-input-label" :class="classLabel">{{ text }}</label>
      <input
        :value="validateInput.value"
        class="base-input"
        :class="[!validateInput.validate ? 'base-input-error' : '', classInput]"
        :type="type"
        :placeholder="placeholder"
        @input="onSwitch($event.target.value)"
      />
    </div>
    <BaseError :validate-input="validateInput" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ValidateInput } from '@/composition/_validate/validate-input'
import {
  TypeValidateInput,
  TypeFormData,
} from '@/composition/_validate/validate-type'
import { InputPropsInterface } from '@/interface/base/props/input-props.interface'
import BaseError from '~/components/base/error/base-error.vue'
export default Vue.extend({
  name: 'BaseInput',
  components: { BaseError },
  props: {
    type: {
      default: 'text',
      type: String,
    },
    placeholder: {
      default: '',
      type: String,
    },
    text: {
      default: '',
      type: String,
    },
    validateForm: {
      type: Object as () => PropType<TypeFormData>,
      required: true,
    },
    validateInput: {
      type: Object as () => PropType<TypeValidateInput>,
      required: true,
    },
    classItem: {
      type: String,
    },
    classLabel: {
      type: String,
    },
    classInput: {
      type: String,
    },
  },
  setup(props: InputPropsInterface) {
    if (props.validateInput) {
      return { ...ValidateInput(props.validateInput) }
    }
  },
})
</script>
<style lang="sass">
@import "assets/sass/base/base-input"
</style>
