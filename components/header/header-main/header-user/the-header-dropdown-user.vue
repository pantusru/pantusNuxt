<template>
  <HeaderDropdown target="header-user-name" :array="link">
    <div class="header-dropdown-link">Выход</div>
  </HeaderDropdown>
</template>

<script lang="ts">
import { HeaderUserDropdown } from '~/composition/header/header-user/header-user-dropdown'
import HeaderDropdown from '~/components/header/header-dropdown.vue'
export default {
  name: 'TheHeaderDropdownUser',
  components: { HeaderDropdown },
  setup() {
    return {
      ...HeaderUserDropdown(),
    }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-dropdown"
</style>
