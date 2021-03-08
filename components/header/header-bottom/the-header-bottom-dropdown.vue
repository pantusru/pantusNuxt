<template>
  <HeaderDropdown :array="link" target="header-bottom-link dropdown-click" />
</template>

<script lang="ts">
import HeaderDropdown from '~/components/header/header-dropdown.vue'
import { HeaderBottomDropdown } from '~/composition/header/header-bottom/header-bottom-dropdown'
export default {
  name: 'HeaderBottomDropdown',
  components: { HeaderDropdown },
  setup() {
    return { ...HeaderBottomDropdown() }
  },
}
</script>
