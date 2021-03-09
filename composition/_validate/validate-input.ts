import {
  TypeValidateInput,
  TypeValidateRegulations,
} from '@/composition/_validate/validate-type'
import { UnwrapRef } from '@nuxtjs/composition-api'

export function ValidateInput(validateInput: UnwrapRef<TypeValidateInput>) {
  const errorUndefined = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    inputData.active = validateInput.value === ''
  }
  const errorRegExp = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.regExp) {
      inputData.active = !inputData.params.regExp.test(validateInput.value)
    }
  }
  const errorValueTrue = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.valueTrue) {
      inputData.params.valueTrue.valueSet.active =
        inputData.params.valueTrue.value1 === inputData.params.valueTrue.value2
    }
  }
  const errorValueFalse = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.valueFalse) {
      inputData.params.valueFalse.valueSet.active =
        inputData.params.valueFalse.value1 !==
        inputData.params.valueFalse.value2
    }
  }

  const errorMinLength = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.minLength) {
      inputData.active =
        validateInput.value.length <= inputData.params.minLength
    }
  }
  const errorLength = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.length) {
      inputData.active = validateInput.value.length !== inputData.params.length
    }
  }
  const errorMaxLength = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.maxLength) {
      inputData.active =
        validateInput.value.length <= inputData.params.maxLength
    }
  }

  const errorValidateInput = (
    regulations: UnwrapRef<TypeValidateRegulations>
  ) => {
    if (validateInput.validate) {
      validateInput.validate = !regulations.active
    }
  }

  const onSwitch = (value?: string) => {
    validateInput.validate = true
    if (typeof value === 'string') {
      validateInput.value = value
    }
    for (const keyReg in validateInput.regulations) {
      if (validateInput.regulations[keyReg].server) {
        validateInput.regulations[keyReg].active = false
        continue
      }
      switch (validateInput.regulations[keyReg].type) {
        case 'undefined':
          errorUndefined(validateInput.regulations[keyReg])
          break
        case 'regExp':
          errorRegExp(validateInput.regulations[keyReg])
          break
        case 'valueTrue':
          errorValueTrue(validateInput.regulations[keyReg])
          break
        case 'valueFalse':
          errorValueFalse(validateInput.regulations[keyReg])
          break
        case 'minLength':
          errorMinLength(validateInput.regulations[keyReg])
          break
        case 'maxLength':
          errorMaxLength(validateInput.regulations[keyReg])
          break
        case 'length':
          errorLength(validateInput.regulations[keyReg])
          break
        default:
          break
      }
      errorValidateInput(validateInput.regulations[keyReg])
    }
  }
  return { onSwitch }
}
