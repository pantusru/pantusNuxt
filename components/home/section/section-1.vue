<template>
  <div class="container">
    <div class="row">
      <div class="col row section1__block-carbrands">
        <home-block-carbrands
          v-for="(link, index) in link1"
          :key="index"
          :link="link"
        />
      </div>
      <div class="col section1-banner">Баннер</div>
    </div>
  </div>
</template>

<script lang="ts">
import { HomeSection1 } from '~/composition/home/section/section-1'
import HomeBlockCarbrands from '~/components/home/elem/home-block-carbrands.vue'

export default {
  name: 'Section1',
  components: { HomeBlockCarbrands },
  setup() {
    return { ...HomeSection1() }
  },
}
</script>
