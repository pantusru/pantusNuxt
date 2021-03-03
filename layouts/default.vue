<template>
  <div>
    <TheHeader />
    <main>
      <Nuxt />
    </main>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/header/the-header.vue'

export default Vue.extend({
  components: {
    TheHeader,
  },
})
</script>
