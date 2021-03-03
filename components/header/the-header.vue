<template>
  <header>
    <TheHeaderTop />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeaderTop from '@/components/header/the-header-top.vue'
export default Vue.extend({
  name: 'TheHeader',
  components: {
    TheHeaderTop,
  },
})
</script>
