// @ts-ignore
export default async ({ store, app }) => {
  console.log(store.getters['authorization/getLoaderUser'])
  if (
    !app.$cookies.get('Authorization') ||
    store.getters['authorization/getLoaderUser']
  ) {
    await store.dispatch('authorization/actionsAuthorization')
  }
}
