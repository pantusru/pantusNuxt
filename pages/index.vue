<template>
  <div>
    <section1 />
    <section2 />
    <section3 />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Section1 from '~/components/home/section/section-1.vue'
import Section2 from '~/components/home/section/section-2.vue'
import Section3 from '~/components/home/section/section-3.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { Section3, Section2, Section1 },
})
</script>
<style lang="sass">
@import "assets/sass/home/home"
</style>
