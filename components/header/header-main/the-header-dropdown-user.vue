<template>
  <div class="header-user-dropdown">
    <nuxt-link
      v-for="data in link"
      :key="data.id"
      class="header-user-dropdown-link"
      :to="data.to"
    >
      {{ data.text }}
    </nuxt-link>
    <div class="header-user-dropdown-link">Выход</div>
  </div>
</template>

<script lang="ts">
import { HeaderUserDropdown } from '@/composition/header/header-user-dropdown'
export default {
  name: 'TheHeaderDropdownUser',
  setup() {
    return { ...HeaderUserDropdown() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-dropdown-user"
</style>
