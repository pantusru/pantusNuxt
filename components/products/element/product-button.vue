<template>
  <div class="product-button-buy-items">
    <!--  ТОВАР не КОРЗИНЕ  -->
    <button v-if="true" class="product-button-buy">
      <div class="product-button-buy-text">Купить</div>
      <span class="product-button-buy-img">
        <FontAwesome unicode="&#xf07a;" />
      </span>
    </button>
    <!--  ТОВАР В КОРЗИНЕ  -->
    <template v-if="false">
      <button class="product-button-buy active">
        <div class="product-button-buy-text active">В корзине</div>
        <span class="product-button-buy-img active">
          <FontAwesome unicode="&#xf07a;" />
        </span>
      </button>
      <FontAwesome
        unicode="&#xf00d;"
        class="product-button-delete link-hover-main"
      />
    </template>
  </div>
</template>

<script>
import FontAwesome from '~/components/base/font-awesome/font-awesome'
export default {
  name: 'ProductButtonBuy',
  components: { FontAwesome },
}
</script>
<style lang="sass">
@import "/assets/sass/products/product-button"
</style>
