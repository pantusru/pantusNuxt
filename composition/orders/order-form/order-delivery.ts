import { useContext } from '@nuxtjs/composition-api'
import { GetOrderForm } from '~/composition/orders/order-form/get-order-form'
import { OrderRiles } from '~/composition/orders/order-form/order-riles'
import { OrdersDeliveryInterface } from '~/interface/orders/orders-servers/orders-delivery.interface'
export function OrderDelivery(emit: Function) {
  const { store } = useContext()
  const { getOrderDelivery } = GetOrderForm()
  const { setRilesDelivery } = OrderRiles()
  const setCity = async (id: number) => {
    setRilesDelivery(id)
    const city: OrdersDeliveryInterface = getOrderDelivery.value.filter(
      (elem: OrdersDeliveryInterface) => elem.id === id
    )[0]
    if (city?.city) {
      emit('city', city.city)
      emit('zip', city.zip)
      await store.dispatch('api/town/actionsTown', city.city)
    }
    emit('value', id)
  }
  return { setCity }
}
