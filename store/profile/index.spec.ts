import { actions, getters, mutations } from '@/store/profile/index'
import {
  ProfileInterface,
  ProfileInterfaceDto,
  ProfileInterfaceStore,
} from '~/interface/profile.interface'
const profileInterfaceDto: ProfileInterfaceDto = {
  contacts: {
    phone: {
      personal: '+7914712',
    },
  },
  name: {
    first: 'maks',
    last: 'Семенов_',
    patronymic: 'Александрович_',
  },
}
const user: ProfileInterface = {
  login: 'test1',
  name: 'maks',
  patronymic: 'Александрович',
  surname: 'Семенов',
  type: 'relite',
  telephone: '+791479157',
}
const userFilter: ProfileInterface = {
  login: 'test1',
  name: 'maks',
  patronymic: 'Александрович_',
  surname: 'Семенов_',
  type: 'relite',
  telephone: '+7914712',
}
const { setProfile, updateProfile } = mutations

describe('store profile', () => {
  const state: ProfileInterfaceStore = { profile: undefined }
  test('mutations setProfile ', function () {
    setProfile(state, user)
    expect(state.profile).toEqual(user)
  })
})
describe('store profile', () => {
  const state: ProfileInterfaceStore = { profile: undefined }
  test('mutations updateProfile ', function () {
    setProfile(state, user)
    updateProfile(state, profileInterfaceDto)
    expect(state.profile).toEqual(userFilter)
  })
})
