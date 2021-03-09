import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'

export function ProfileLink() {
  const link: LinkPropsInterface[] = [
    {
      id: 1,
      to: '/profile',
      text: 'Личный кабинет',
    },
    {
      id: 2,
      to: '/profile/orders',
      text: 'История заказов',
    },
  ]
  return { link }
}
