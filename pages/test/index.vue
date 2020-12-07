<template>
  <div>
    <test name_class="nav-index">
      <b-container>
        <test name_class="nav-index-wrapper">
          <nuxt-link to="/" class="logo">
            <test component_tag="img" :src="require('@/assets/img/logo.png')" />
          </nuxt-link>
          <test name_class="input-header-search-wrapper">
            <test name_class="input-header-search" component_tag="input" />
            <test
              name_class="input-header-search-button"
              component_tag="button"
            >
              Найти
            </test>
          </test>
        </test>
      </b-container>
    </test>
  </div>
</template>

<script>
import test from "@/components/test/test";
export default {
  name: "test-view",
  components: {
    test,
  },
};
</script>

<style lang="sass">
@import "../../assets/sass/nav/nav-header-index"
@import "assets/sass/input/input-header-search"
</style>
