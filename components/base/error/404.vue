<template>
  <h2 class="error-404">{{ text }}</h2>
</template>

<script>
export default {
  name: 'Error404',
  props: {
    text: {
      type: String,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/error-404.sass"
</style>
