<template>
  <div :class="classImg">
    <v-lazy-image class="img" :src="src" alt="" />
    <a :to="src" @click.prevent="" />
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image'

export default {
  name: 'ProductImg',
  components: { VLazyImage },
  props: {
    classImg: {
      type: String,
      default: 'product-img',
    },
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
}
</script>
