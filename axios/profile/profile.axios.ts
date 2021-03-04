import {
  ProfileInterface,
  ProfileInterfaceApi,
} from '@/interface/profile.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const ProfileAxios = async (
  $axios: NuxtAxiosInstance
): Promise<ProfileInterface | undefined> => {
  const { data } = await $axios.get(`${process.env.api}/personal/profile`)
  if (!data.error) {
    return ProfileMap(data)
  }
}

const ProfileMap = (data: ProfileInterfaceApi): ProfileInterface => {
  return {
    login: data.contacts.email,
    name: data.name.first,
    surname: data.name.last,
    patronymic: data.name.patronymic,
    telephone: data.contacts.phone.personal,
    type: data.account.type,
  }
}
