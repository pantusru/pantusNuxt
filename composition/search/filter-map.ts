import { Ref } from '@nuxtjs/composition-api'
import { SearchFormInterface } from '~/interface/search/search-form.interface'
import { SearchUrlInterface } from '~/interface/search/search-url.interface'

export function FilterMap() {
  const checkValidateFilter = (data: string | (string | null)[]): number[] => {
    if (data) {
      return data
        .toString()
        .split(',')
        .map((string: string) => +string)
    }
    return []
  }
  const queryToVuex = (route: Ref<any>) => {
    return {
      brandChecked: checkValidateFilter(route.value.query.filter_brands),
      categoriesChecked: checkValidateFilter(
        route.value.query.filter_categories
      ),
      applicabilitiesChecked: checkValidateFilter(
        route.value.query.filter_applicabilities
      ),
      page: route.value.query?.page?.parseInt() ?? 1,
      search: route.value.query.filter_substr ?? '',
    }
  }
  const vuexToQuery = (getForm: SearchFormInterface) => {
    const url: SearchUrlInterface = {}
    if (getForm.brandChecked.length > 0) {
      url.filter_brands = getForm.brandChecked?.join()
    }
    if (getForm.categoriesChecked.length > 0) {
      url.filter_categories = getForm.categoriesChecked.join()
    }
    if (getForm.applicabilitiesChecked.length > 0) {
      url.filter_applicabilities = getForm.applicabilitiesChecked.join()
    }
    if (getForm.search?.length > 0 || getForm.search !== '') {
      url.filter_substr = getForm.search
    }
    if (getForm.page && getForm.page > 1) {
      url.page = getForm.page.toString()
    }
    return url
  }

  return { queryToVuex, vuexToQuery }
}
