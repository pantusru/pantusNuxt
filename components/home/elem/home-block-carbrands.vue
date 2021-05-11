<template>
  <div class="home-block__carbrands box-shadow" :class="link.className">
    <nuxt-link
      :to="link.linkMain.to"
      class="link link-hover-main home-link__carbrands"
      >{{ link.linkMain.text }}
    </nuxt-link>
    <div class="row-gutters">
      <div class="home-wrapper__children__carbrands">
        <nuxt-link
          v-for="(linkId, index) in link.linkDon"
          :key="index"
          :to="linkId.to"
          class="home-link__children__carbrands"
        >
          {{ linkId.text }}
        </nuxt-link>
      </div>
      <img
        v-if="link.img"
        :src="link.img.url"
        :alt="link.img.alt"
        class="img home-block-img"
        :class="link.img.class"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { LinkHomePropsInterface } from '~/interface/base/props/link-home-props.interface'

export default {
  name: 'HomeBlockCarbrands',
  props: {
    link: {
      type: Object as PropType<LinkHomePropsInterface>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/home/block-carbrands"
</style>
