import { useContext, useFetch } from '@nuxtjs/composition-api'

export function PageOrderForm() {
  const { store } = useContext()
  useFetch(async () => {
    await store.dispatch('orders/rules/actionsOrder')
    await store.dispatch('orders/delivery/actionsOrder')
    await store.dispatch('orders/payment/actionsOrder')
  })
  return {}
}
