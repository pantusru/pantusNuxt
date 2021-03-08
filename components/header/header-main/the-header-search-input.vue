<template>
  <div class="header-search-items">
    <div class="header-search-input-items">
      <input type="text" class="header-search-input" />
      <button class="header-search-button" @click.prevent="pushSearch">
        Найти
      </button>
    </div>
    <div v-if="false" class="header-search-error">Вы не указали поиск</div>
  </div>
</template>

<script lang="ts">
import { HeaderSearchInput } from '~/composition/header/header-search-input'
export default {
  name: 'TheHeaderSearchInput',
  setup() {
    return { ...HeaderSearchInput() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-search-input"
</style>
