<template>
  <header>
    <TheHeaderTop />
    <TheHeaderMain />
    <TheHeaderBottom />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeaderTop from '~/components/header/header-top/the-header-top.vue'
import TheHeaderMain from '~/components/header/header-main/the-header-main.vue'
import TheHeaderBottom from '~/components/header/header-bottom/the-header-bottom.vue'
export default Vue.extend({
  name: 'TheHeader',
  components: {
    TheHeaderBottom,
    TheHeaderTop,
    TheHeaderMain,
  },
})
</script>
