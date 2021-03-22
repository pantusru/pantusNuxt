<template>
  <div class="cart-group-button">
    <button v-if="getCartAxios" class="link-hover-button button">
      Обновить корзину
    </button>
    <nuxt-link
      v-if="!getUserAuthorization"
      to="/authorization"
      class="link-hover-button button"
    >
      Авторизоваться
    </nuxt-link>
    <nuxt-link
      v-if="getUserAuthorization"
      to="/order"
      class="link-hover-button button"
    >
      Оформить заказ
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { CartGroupButton } from '~/composition/cart/cart-group-button'

export default {
  name: 'CartGroupButton',
  setup() {
    return { ...CartGroupButton() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/cart/cart-group-button"
</style>
