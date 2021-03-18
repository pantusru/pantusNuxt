export interface brandInterface {
  id: number
  name: string
  code: string
  active: boolean
}
export interface brandInterfaceApi {
  id: number
  name: string
  code: string
  // eslint-disable-next-line camelcase
  contains_description: boolean
}
export interface brandInterfaceStore {
  brand: brandInterface[] | null
  limitPage: number
}
