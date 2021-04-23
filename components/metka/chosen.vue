<template>
  <b-icon-bookmark-plus
    :class="{ activ: selected }"
    class="icons-chosen cursor-pointer h4 d-none-chosen fz-5"
    @click="SetChosen"
  />
</template>

<script>
export default {
  name: "FilterMetka",
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
        this.$store.dispatch("Selected/selected/_DeleteSelected", {
          id: this.id,
          index,
        });
        this.title = "Добавить в избранное Удалить из избранного";
      } else {
        // Добавить товар  в selected
        this.selected = true;
        this.$store.dispatch("Selected/selected/_AddSelected", {
          data: this.link,
          id: this.id,
        });
        this.title = "Удалить из избранного";
      }
    },
  },
};
</script>

<style>
.icons-chosen {
  position: absolute;
  border: 0;
}
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
