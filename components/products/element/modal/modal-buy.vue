<template>
  <div class="modal">
    <div class="modal-dialog" v-on="$listeners">
      <div class="modal-header">
        <h3 class="">Товар будет добавлен в корзину</h3>
        <button class="modal-clone">
          <FontAwesome unicode="&#xf00d;" @click="close" />
        </button>
      </div>
      <div class="modal-body">
        <modal-buy-params :value="linkProduct.name" name="Название:" />
        <modal-buy-params :value="linkProduct.sku.original" name="Артикул:" />
        <modal-buy-params
          :value="linkOffers.prices.toString() + ' ₽'"
          name="Цена:"
        />
        <modal-buy-params
          :value="linkOffers.multiplicity.toString()"
          name="Кратность:"
        />
        <modal-buy-params name="Количество:">
          {{ count }}
          <product-count-offers
            v-if="!active"
            :offers="linkOffers"
            :count.sync="count"
          />
        </modal-buy-params>

        <modal-buy-params name="Итог:">
          <product-symma :symma="linkOffers.prices" />
        </modal-buy-params>
      </div>
      <div class="modal-footer"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {
  TypeCartProduct,
  TypeOfferProduct,
} from '~/interface/products/products.interface'
import { ProductModalBuy } from '~/composition/products/product-modal-buy'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import ModalBuyParams from '~/components/products/element/modal/modal-buy-params.vue'
import ProductSymma from '~/components/products/element/product-symma.vue'
import ProductCountOffers from '~/components/products/element/offer/product-count-offers.vue'

export default {
  name: 'ModalBuy',
  components: {
    ProductCountOffers,
    ProductSymma,
    ModalBuyParams,
    FontAwesome,
  },
  props: {
    active: {
      type: Boolean,
    },
    linkProduct: {
      request: true,
      type: Object as PropType<TypeCartProduct>,
    },
    linkOffers: {
      request: true,
      type: Object as PropType<TypeOfferProduct>,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props: any, { emit }: { emit: Function }) {
    return { ...ProductModalBuy(emit) }
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/base-modal"
</style>
