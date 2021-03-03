// @ts-ignore
export default ({ $axios, app }) => {
  $axios.onRequest(() => {
    const token = app.$cookies.get('Authorization')
    if (token) {
      $axios.defaults.headers.Authorization = `Bearer ${token}`
    }
  })
}
