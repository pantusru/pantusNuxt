import { useContext, computed, ref } from '@nuxtjs/composition-api'
export function FilterBrandChecked(id: number) {
  const { store } = useContext()
  const Checked = ref(false)
  const BrandChecked = computed(
    () => store.getters['search/form/getBrandChecked']
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
