<template>
  <main>
    <section1 />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import Section1 from '~/components/home/section/section-1.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { Section1 },
})
</script>
<style lang="sass">
@import "assets/sass/home/home"
</style>
