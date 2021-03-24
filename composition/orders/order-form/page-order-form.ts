import { useContext, useFetch } from '@nuxtjs/composition-api'

export function PageOrderForm() {
  const { store } = useContext()
  let typeIdUser = 1
  if (store.getters['profile/getProfile'].type === 'wholesale') {
    typeIdUser = 2
  }
  useFetch(async () => {
    await store.dispatch('orders/rules/actionsOrder')
    await store.dispatch('orders/delivery/actionsOrder', typeIdUser)
    await store.dispatch('orders/payment/actionsOrder', typeIdUser)
  })
  return {}
}
