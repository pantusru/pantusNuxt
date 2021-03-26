import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const ApiTownAxios = async (
  $axios: NuxtAxiosInstance,
  params: string
) => {
  const { data } = await $axios.get(`${process.env.api}/kladr?query=${params}`)
  return data
}
