<template>
  <div class="container">
    <div>404 Ошибка</div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  asyncData({ redirect, route }) {
    if (route.path !== '/404') {
      redirect('/404')
    }
  },
}
</script>
