import { computed, useContext } from '@nuxtjs/composition-api'
export function GetOrderForm() {
  const { store } = useContext()
  const getOrderRules = computed(() => {
    return store.getters['orders/rules/getOrderRules']
  })
  const getOrderPayment = computed(() => {
    return store.getters['orders/payment/getOrderPayment']
  })
  const getOrderDelivery = computed(() => {
    return store.getters['orders/delivery/getOrderDelivery']
  })
  return { getOrderRules, getOrderPayment, getOrderDelivery }
}
