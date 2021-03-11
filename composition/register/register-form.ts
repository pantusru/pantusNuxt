import { ref, useContext, useRouter } from '@nuxtjs/composition-api'
import {
  TypeFormData,
  TypeRegulations,
} from '@/composition/_validate/validate-type'
import { ValidateForm } from '@/composition/_validate/validate-form'

export function RegisterForm() {
  // const { store } = useContext()
  // const router = useRouter()
  const formDataRetail = ref<TypeFormData>({
    checkbox: {
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Подтвердите ваше согласие на обработку персональных данных',
          params: {},
          active: false,
          type: TypeRegulations.CheckTrue,
        },
      ],
      validate: false,
    },
    type: {
      value: 'retail',
      validate: true,
      regulations: [],
    },
    name: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите ваше имя',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    surname: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите вашу фамилию',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    email: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите ваш email',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Email уже занят',
          params: {},
          active: false,
          server: true,
        },
      ],
      validate: true,
    },
    password: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Вы не указали пароль',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Пароль должен состоять не менее 8 символов',
          params: { minLength: 8 },
          active: false,
          type: TypeRegulations.MinLength,
        },
        {
          id: 3,
          text: '',
          params: {},
          active: false,
          type: TypeRegulations.ValueFalse,
        },
      ],
      validate: true,
    },
    passwordRepeat: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите пароль еще раз',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Пароли не совпадают',
          params: {},
          active: false,
          type: TypeRegulations.ValueFalse,
        },
      ],
      validate: true,
    },
    telephone: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите номер телефона',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Вы указали номер телефона не корректно',
          params: { length: 17 },
          active: false,
          type: TypeRegulations.Length,
        },
      ],
      validate: true,
    },
  })
  formDataRetail.value.passwordRepeat.regulations[1].params = {
    valueFalse: {
      RegSet: formDataRetail.value.passwordRepeat.regulations[1],
      valueSet: formDataRetail.value.passwordRepeat,
      valueCheck: formDataRetail.value.password,
    },
  }
  formDataRetail.value.password.regulations[2].params =
    formDataRetail.value.passwordRepeat.regulations[1].params

  const formData = formDataRetail

  const registerValidateForm = async () => {
    console.log(formData)
    let validateClient: boolean
    if (formData.value.type.value === 'retail') {
      validateClient = ValidateForm(formDataRetail.value).validateForm()
    } else {
      validateClient = ValidateForm(formData.value).validateForm()
    }
    if (validateClient) {
      // const validateServer = await store.dispatch(
      //   'authorization/actionsAuthorization',
      //   {
      //     login: formData.value.login.value,
      //     password: formData.value.password.value,
      //   }
      // )
      // if (validateServer) {
      //   await router.push('/')
      // } else {
      //   formData.value.login.regulations[1].active = true
      // }
    }
  }
  return { formData, registerValidateForm }
}
