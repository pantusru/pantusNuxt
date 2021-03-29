import { useContext, ref, computed, Ref } from '@nuxtjs/composition-api'
export function OrderCity(emit: Function) {
  const { store } = useContext()
  const timerId: Ref<null | ReturnType<typeof setTimeout>> = ref(null)

  const getCity = computed(() => {
    return store.getters['api/town/getTown']
  })

  const searchCity = (name: string) => {
    emit('value', name)
    emit('zip', '')
    if (timerId.value !== null) {
      clearTimeout(timerId.value)
    }
    timerId.value = setTimeout(async () => {
      await store.dispatch('api/town/actionsTown', name)
    }, 1000)
  }
  const setCityOrder = (name: string, zip: string) => {
    emit('value', name)
    emit('zip', zip)
  }
  return { searchCity, getCity, setCityOrder }
}
