<template>
  <div>
    <div :class="classItem">
      <ElementValidate
        :checked="checked"
        v-bind="$attrs"
        :id="id"
        :validate-input="validateInput"
        :validate-form="validateForm"
        :name="name"
        :value="value"
        :class="'base-radio' + classInput"
        type="radio"
      />
      <label class="base-radio-label" :class="classLabel" :for="id"
        >{{ text }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import {
  TypeValidateInput,
  TypeFormData,
} from '@/composition/_validate/validate-type'
import ElementValidate from '~/components/base/input/element-validate.vue'
export default Vue.extend({
  name: 'BaseRadio',
  components: { ElementValidate },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
    id: {
      type: String,
    },
    name: {
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
