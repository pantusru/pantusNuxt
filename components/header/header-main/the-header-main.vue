<template>
  <div class="container">
    <div class="row row-header-main">
      <TheLogo />
      <TheHeaderSearchInput />
      <TheHeaderUser />
    </div>
  </div>
</template>

<script>
import TheLogo from '~/components/header/header-main/the-logo'
import TheHeaderSearchInput from '~/components/header/header-main/the-header-search-input'
import TheHeaderUser from '~/components/header/header-main/header-user/the-header-user'
export default {
  name: 'TheHeaderMain',
  components: { TheHeaderUser, TheHeaderSearchInput, TheLogo },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-main"
</style>
