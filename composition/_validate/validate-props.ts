import { computed } from '@nuxtjs/composition-api'
import { TypeValidateInput } from '~/composition/_validate/validate-type'
import { ValidateInput } from '~/composition/_validate/validate-input'
export function ValidateProps(
  validate: TypeValidateInput,
  value: any,
  emit: Function
) {
  const propsValue = computed({
    get() {
      return value
    },
    set(value) {
      emit('update:value', value)
      // ValidateInput(validate).onSwitch()
    },
  })
  return { propsValue }
}
