import { ref, useContext, useRouter } from '@nuxtjs/composition-api'
import {
  TypeFormData,
  TypeRegulations,
} from '@/composition/_validate/validate-type'
import { ValidateForm } from '@/composition/_validate/validate-form'

export function AuthorizationForm() {
  const { store } = useContext()
  const router = useRouter()
  const formData = ref<TypeFormData>({
    surname: {
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Вы не указали фамилию',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Не верный логин или пароль',
          params: {},
          active: false,
          server: true,
        },
      ],
      validate: true,
    },
    password: {
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Вы не указали пароль',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
  })
  const authorizationValidateForm = async () => {
    const validateClient = ValidateForm(formData.value).validateForm()
    if (validateClient) {
      const validateServer = await store.dispatch(
        'authorization/actionsAuthorization',
        {
          login: formData.value.login.value,
          password: formData.value.password.value,
        }
      )
      if (validateServer) {
        await router.push('/')
      } else {
        formData.value.login.regulations[1].active = true
      }
    }
  }
  return { formData, authorizationValidateForm }
}
