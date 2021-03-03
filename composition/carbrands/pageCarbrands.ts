import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
export function PageCarbrands() {
  const { store } = useContext()
  useFetch(async () => {
    await store.dispatch('carbrands/actionsCarbrands')
  })

  const getCarbrands = computed(() => {
    return store.getters['carbrands/getCarbrands']
  })

  return { getCarbrands }
}
