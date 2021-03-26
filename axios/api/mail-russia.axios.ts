import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const ApiTownAxios = async (
  $axios: NuxtAxiosInstance,
  params: string
) => {
  const { data } = await $axios.get( `${process.env.api}/rupost?sumoc=${symma}&to=${to}&weight=${weight}`)
  return data
}
