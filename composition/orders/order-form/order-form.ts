import { ref, useContext } from '@nuxtjs/composition-api'
import {
  TypeFormData,
  TypeRegulations,
} from '~/composition/_validate/validate-type'
// import { ValidateForm } from '~/composition/_validate/validate-form'

export function OrderForm() {
  const { store } = useContext()
  const profile = store.getters['profile/getProfile']
  // const router = useRouter()
  const formDataRetail = ref<TypeFormData>({
    name: {
      value: profile.name,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали имя',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    surname: {
      value: profile.surname,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали фамилию',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    telephone: {
      value: profile.telephone,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали номер телефона',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Вы указали номер телефона не корректно',
          params: { length: 18 },
          active: false,
          type: TypeRegulations.Length,
        },
      ],
      validate: true,
    },
    city: {
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Вы не указали город',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    payment: {
      value: null,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали способ оплаты',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    delivery: {
      value: null,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали способ доставки',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    zip: {
      regulations: [],
      value: undefined,
      validate: true,
    },
    deliverySumma: {
      regulations: [],
      value: 0,
      validate: true,
    },
  })
  return { formDataRetail }
}
