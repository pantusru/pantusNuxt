<template>
  <component :title="title" :is="'td'">
    <b-icon-bookmark-plus
      @click="SetChosen"
      :class="{ activ: selected }"
      class="cursor-pointer h4 d-none-chosen fz-5"
    >
    </b-icon-bookmark-plus>
  </component>
</template>

<script>
export default {
  name: "filter-metka",
  data() {
    return {
      /**
       * @property Флаг выбран ли товар в израбранных
       */
      selected: false,
      /**
       * @property что отображать при наведение на иконку
       */
      title: "Добавить в избранное",
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
    link: {
      type: Object,
    },
  },
  methods: {
    /**
     * @function SetChosen - Меняет состояние selected на противоположное
     */
    SetChosen() {
      if (this.selected) {
        // Убрать товар с selected
        this.selected = false;
        const index = this.SelectedProducts.findIndex(
          s => s.ProductCard.id == this.id
        );
        this.$store.commit("Selected/selected/DeleteSelected", index);
        this.title = "Добавить в избранное Удалить из избранного";
      } else {
        // Добавить товар  в selected
        this.selected = true;
        this.$store.commit("Selected/selected/PushSelected", this.link);
        this.title = "Удалить из избранного";
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
    const data = this.SelectedProducts;
    for (const key in data) {
      // Проверяем есть ли этот товар в избранных
      if (data[key].ProductCard.id == this.id) {
        this.selected = true;
        this.title = "Удалить из избранного";
        break;
      }
    }
  },
};
</script>

<style>
svg.d-none-chosen {
  display: none !important;
  /*left: -20px;*/
}

svg.d-none-chosen.activ {
  display: block !important;
}

.d-none-chosen:hover,
.activ {
  color: red !important;
}
</style>
