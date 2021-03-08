<template>
  <nuxt-link :class="classLink" to=""> </nuxt-link>
</template>

<script lang="ts">
export default {
  name: 'ProductLinkId',
  props: {
    classLink: {
      type: String,
    },
  },
}
</script>
