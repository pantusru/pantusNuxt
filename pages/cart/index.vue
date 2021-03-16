<template>
  <div class="container">
    <CartTable v-if="getCart.length > 0" :cart="getCart" />
    <Error404 v-else :text="'Корзина пустая'" />
    <!--    <button v-if="getCartAxios" class="link-hover-button button">-->
    <!--      Обновить корзину-->
    <!--    </button>-->
  </div>
</template>

<script lang="ts">
import { PageCart } from '~/composition/cart/page-cart'
import CartTable from '~/components/cart/cart-table.vue'
import Error404 from '~/components/base/error/404.vue'

export default {
  name: 'PageCart',
  components: { Error404, CartTable },
  setup() {
    return { ...PageCart() }
  },
}
</script>
