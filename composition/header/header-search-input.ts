import { useRouter } from '@nuxtjs/composition-api'
export function HeaderSearchInput() {
  const router = useRouter()
  const pushSearch = async () => {
    await router.push('/search')
  }
  return { pushSearch }
}
