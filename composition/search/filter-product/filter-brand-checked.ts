import { useContext, computed, ref, watch, Ref } from '@nuxtjs/composition-api'
export function FilterBrandChecked(id: number) {
  const { store } = useContext()
  const Checked = ref(false)
  const BrandChecked: Ref<number[]> = computed(
    () => store.getters['search/form/getBrandChecked']
  )
  watch(
    () => BrandChecked.value,
    (value) => {
      if (value?.length === 0) {
        Checked.value = false
      }
    }
  )
  const FilterBrandChecked = BrandChecked.value.indexOf(id)
  if (FilterBrandChecked !== -1) {
    Checked.value = true
  }
  const ClickBrandChecked = () => {
    Checked.value = !Checked.value
    if (Checked.value) {
      store.commit('search/form/pushBrandChecked', id)
    } else {
      const index: number = BrandChecked.value.indexOf(id)
      store.commit('search/form/deleteBrandChecked', index)
    }
  }
  return { Checked, ClickBrandChecked }
}
