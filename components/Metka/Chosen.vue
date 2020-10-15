<template>
  <b-icon-bookmark-plus
    @click="SetChosen"
    :class="{ activ: selected }"
    class="cursor-pointer h4 d-none-chosen fz-5"
  >
  </b-icon-bookmark-plus>
</template>

<script>
export default {
  data() {
    return {
        /**
         * @property Флаг выбран ли товар в израбранных
         */
      selected: false,
    };
  },
  props: {
    /**
     * @property Id Товара
     */
    id: {
      type: Number,
    },
      /**
     * @property Ссылка на Товар
     */
    link: {},
  },
  methods: {
      /**
       * @function SetChosen - Меняет состояние selected на противоположное 
       */
    SetChosen() {
      if (this.selected) { // Убрать товар с selected
        this.selected = false;
        let index = this.SelectedProducts.findIndex(
          (s) => s.ProductCard.id == this.id
        );
        this.$store.commit("Selected/selected/DeleteSelected", index);
      } else {// Добавить товар  в selected
        this.selected = true;
        this.$store.commit("Selected/selected/PushSelected", this.link);
      }
    },
  },
  computed: {
    /**
     * @property Массив всех выбранных товаров
     */
    SelectedProducts() {
      return this.$store.getters["Selected/selected/GetSelected"];
    },
  },
  created() {
    let data = this.SelectedProducts;
    for (const key in data) { // Проверяем есть ли этот товар в избранных
      if (data[key].ProductCard.id == this.id) {
        this.selected = true;
        break;
      }
    }
  },
};
</script>

<style>
svg.d-none-chosen {
  display: none !important ;
}
svg.d-none-chosen.activ {
  display: block !important;
}
.d-none-chosen:hover,
.activ {
  color: red !important;
}
</style>