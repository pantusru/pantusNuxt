import { useContext, useRouter } from '@nuxtjs/composition-api'

export function ProfileExit() {
  const { store, app } = useContext()
  const router = useRouter()
  const exitUser = async () => {
    await router.push('/')
    app.$cookies.removeAll()
    app.$axios.setToken(false)
    store.commit('authorization/setUserAuthorization', false)
    store.commit('profile/setProfile', undefined)
    await store.dispatch('authorization/actionsAuthorization')
  }
  return { exitUser }
}
