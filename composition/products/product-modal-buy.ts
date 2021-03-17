// import { ssrRef } from '@nuxtjs/composition-api'

export function ProductModalBuy($emit: any) {
  const close = () => {
    $emit('close')
  }
  return { close }
}
