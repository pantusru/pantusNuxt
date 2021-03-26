import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'

export function HeaderBottom() {
  const link: LinkPropsInterface[] = [
    { id: 1, to: '', text: 'Автокаталоги' },
    { id: 2, to: '', text: 'Запчасти для а/м ВАЗ' },
    { id: 3, to: '', text: 'Запчасти для а/м КАМАЗ' },
    { id: 4, to: '', text: 'Запчасти для а/м ГАЗ' },
    { id: 5, to: '', text: 'Запчасти для а/м РТИ' },
    { id: 6, to: '/popular', text: 'Популярное' },
    { id: 7, to: '', text: 'Новинки' },
  ]
  return { link }
}
