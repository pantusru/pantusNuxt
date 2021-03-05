<template>
  <header>
    <TheHeaderTop />
    <TheHeaderMain />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeaderTop from '@/components/header/the-header-top.vue'
import TheHeaderMain from '~/components/header/header-main/the-header-main.vue'
export default Vue.extend({
  name: 'TheHeader',
  components: {
    TheHeaderTop,
    TheHeaderMain,
  },
})
</script>
