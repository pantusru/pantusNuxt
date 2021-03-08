<template>
  <div class="header-user-dropdown" v-if="getToggle">
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
import { HeaderUserDropdown } from '~/composition/header/header-user/header-user-dropdown'
import { ToggleBody } from '~/composition/_toggle/toggle-body'
export default {
  name: 'TheHeaderDropdownUser',
  setup() {
    return { ...HeaderUserDropdown(), ...ToggleBody(undefined, 'header-user-name' ) }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-dropdown-user"
</style>
