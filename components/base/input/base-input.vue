<template>
  <div class="base-input-blog">
    <div class="base-input-item" :class="classItem">
      <label class="base-input-label" :class="classLabel" :for="id"
        >{{ text }}
        <span v-if="validateInput.req" class="base-input-icons-req">*</span>
      </label>
      <ElementValidate
        :id="id"
        :component-name="componentsName"
        :validate-input="validateInput"
        :validate-form="validateForm"
        :name="name"
        :value="validateInput.value"
        :class="'base-input ' + classInput"
        class-error="base-input-error"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
      />
    </div>
    <BaseError :validate-input="validateInput" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import {
  TypeValidateInput,
  TypeFormData,
} from '@/composition/_validate/validate-type'
import BaseError from '~/components/base/error/base-error.vue'
import ElementValidate from '~/components/base/input/element-validate.vue'
export default Vue.extend({
  name: 'BaseInput',
  components: { ElementValidate, BaseError },
  props: {
    autocomplete: {
      type: String,
    },
    componentsName: {
      type: String,
      default: 'input',
    },
    id: {
      type: String,
    },
    name: {
      default: '',
      type: String,
    },
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
    },
    validateInput: {
      type: Object as () => PropType<TypeValidateInput>,
      required: true,
    },
    classItem: {
      type: String,
      default: '',
    },
    classLabel: {
      type: String,
      default: '',
    },
    classInput: {
      type: String,
      default: '',
    },
  },
})
</script>
<style lang="sass">
@import "assets/sass/base/base-input"
</style>
