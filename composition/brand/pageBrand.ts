import {
  computed,
  useContext,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
export function PageBrand() {
  const { store } = useContext()
  const route = useRoute()
  useFetch(async () => {
    await store.dispatch('brand/actionsBrand')
  })
  const setBrand = async () => {
    await store.dispatch('brand/actionsBrand')
  }
  const getBrandPage = computed(() => {
    return store.getters['brand/getBrandPage'](Number(route.value.query.page))
  })
  const getBrand = computed(() => {
    return store.getters['brand/getBrand']
  })
  const getLimitPage = computed(() => {
    return store.getters['brand/getLimitPage']
  })
  return { getBrandPage, getLimitPage, getBrand, setBrand }
}
