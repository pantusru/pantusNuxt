export enum TypeRegulations {
  RegExp = 'regExp',
  Undefined = 'undefined',
  ValueTrue = 'valueTrue',
  ValueFalse = 'valueFalse',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
}
export type TypeValueCheck = {
  value1: string
  value2: string
  // eslint-disable-next-line no-use-before-define
  valueSet: TypeValidateRegulations
}
export type TypeValidateParamsAll = {
  minLength?: number
  maxLength?: number
  regExp?: RegExp
  valueTrue?: TypeValueCheck
  valueFalse?: TypeValueCheck
}
export type TypeValidateRegulations = {
  id: number
  server?: boolean
  type?: TypeRegulations
  active: boolean
  text: string
  params: TypeValidateParamsAll
}
export type TypeValidateInput = {
  validate: boolean
  regulations: TypeValidateRegulations[]
  value: string
}

export type TypeFormData = {
  [item: string]: TypeValidateInput
}
