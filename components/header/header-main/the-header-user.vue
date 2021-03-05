<template>
  <div class="header-user-row row-gutters">
    <div class="header-user-items row-gutters">
      <the-header-dropdown-user />
      <div class="header-user-img">
        <img
          class="img"
          :src="require('@/assets/img/icons/icon-avatar.png')"
          alt="icons-avatar"
        />
      </div>
      <div v-if="!getProfile" class="header-user-items-link">
        <nuxt-link
          v-for="data in link"
          :key="data.id"
          :class="data.class"
          :to="data.to"
        >
          {{ data.text }}
        </nuxt-link>
      </div>
      <div
        v-if="getProfile"
        class="link-hover-main link header-user-items-link"
      >
        <div>{{ getProfile.surname }}</div>
        <div>{{ getProfile.name }}</div>
      </div>
    </div>
    <div class="header-user-items row-gutters">
      <div class="header-user-img">
        <img
          class="img"
          :src="require('@/assets/img/icons/icon-shopping-cart.png')"
          alt="icon-cart"
        />
      </div>
      <div class="header-user-items-link">
        <nuxt-link class="link-hover-main link header-user-link" to="/cart">
          Корзина
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { HeaderUser } from '~/composition/header/header-user'
import TheHeaderDropdownUser from '~/components/header/header-main/the-header-dropdown-user.vue'

export default {
  name: 'TheHeaderUser',
  components: { TheHeaderDropdownUser },
  setup() {
    return { ...HeaderUser() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/header/header-main/header-user"
</style>
