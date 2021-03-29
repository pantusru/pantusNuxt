import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const ApiTownAxios = async (
  $axios: NuxtAxiosInstance,
  symma: string,
  to: string,
  weight: string
) => {
  const { data } = await $axios.get(
    `${process.env.api}/rupost?sumoc=${symma}&to=${to}&weight=${weight}`
  )
  return data
}
