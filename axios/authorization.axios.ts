import {
  AuthorizationInterface,
  AuthorizationInterfaceApi,
} from '@/interface/authorization.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const AuthorizationAxios = async (
  $axios: NuxtAxiosInstance
): Promise<AuthorizationInterface> => {
  const { data } = await $axios.get(`${process.env.api}/auth`)
  return AuthorizationMap(data)
}

const AuthorizationMap = (
  data: AuthorizationInterfaceApi
): AuthorizationInterface => {
  return {
    id: data.id,
    token: data.token,
  }
}
