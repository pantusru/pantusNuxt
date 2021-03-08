import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'

export function HeaderBottom() {
  const link: LinkPropsInterface[] = [
    { id: 1, to: '', text: 'Автокаталоги' },
    { id: 2, to: '', text: 'ВАЗ' },
    { id: 3, to: '', text: 'КАМАЗ' },
    { id: 4, to: '', text: 'ГАЗ' },
    { id: 5, to: '', text: 'РТИ' },
    { id: 6, to: '/popular', text: 'Популярное' },
    { id: 7, to: '', text: 'Новинки' },
  ]
  return { link }
}
