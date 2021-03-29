export interface TownInterface {
  id: string
  type: string
  typeShort: string
  zip: string
  name: string
}
export interface TownInterfaceStore {
  town: TownInterface[] | []
}
