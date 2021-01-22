<template>
  <div :class="addClass" class="autocomplete">
    <b-input
      autocomplete="off"
      type="text"
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      @focus="getItems"
    />
    <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
      <li
        v-for="(item, i) in items"
        :key="i"
        @click="setResult(item.name, item.id)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ item.typeShort }}
        {{ item.name }}
        <span
          class="text-muted"
          v-for="parent in item.parents"
          :key="parent.id"
        >
          <template v-if="parent.typeShort == 'Респ'">
            {{ parent.typeShort }} {{ parent.name }}
          </template>
          <template v-else> {{ parent.name }} {{ parent.typeShort }} </template>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "autocomplete",

  props: {
    addClass: {
      type: String,
      required: false,
    },
  },
  watch: {
    items() {
      this.getItems();
    },
  },
  // data() {
  //   return {
  //     items: [], // Массив результата города
  //     timerId: null, // ID таймер для stop запросов
  //     isOpen: false, // состояние открыто ли меню
  //     // search: '', // что ввел пользователь поиска
  //     arrowCounter: 0, // Index выделяющегося элемента списка
  //     id: 0, // ID выбранного поиска
  //   };
  // },
  computed: {
    search: {
      get() {
        return this.$store.getters["Order/Form/GetContact"].Town;
      },
      set(value) {
        this.$store.commit("Order/Form/SetFull", {
          name: "Town",
          value: value,
        });
      },
    },
  },
  methods: {
    async GetData() {
      // Запрос загрузки данных
      this.items = [];
      const dataset = await this.$store.dispatch(
        "API/axios/_API_Town",
        this.search
      );
      if (dataset.result.length > 1) {
        let result = dataset.result;
        result = result.slice(1, result.length);
        for (const index in result) {
          this.items.push({
            id: result[index].id,
            typeShort: result[index].typeShort,
            name: result[index].name,
            parents: result[index].parents,
          });
        }
      }
    },
    getItems() {
      //  если items пустой то не отображаем ul
      if (this.items.length > 0) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
    SetValue() {
      // Избавление от лишних запросов
      if (this.timerId != null) {
        clearTimeout(this.timerId);
      }
      this.timerId = setTimeout(this.GetData, 1000);
    },
    onChange() {
      // Пока отправлять запрос и изменение vuex
      this.$emit("input", { data: this.search, id: this.id });
      this.SetValue();
    },
    setResult(result, id) {
      // Была выбрана li
      this.id = id;
      this.search = result;
      this.isOpen = false;
      this.$emit("input", { data: this.search, id: this.id });
    },
    onArrowDown() {
      // Нажата кнопка вниз изменение
      if (this.arrowCounter < this.items.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      // Нажата кнопка вверх
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      // нажата кнопка enter
      this.search = this.items[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      // Клик на body и скрытие ul
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 200px;
  overflow: auto;
  width: 100%;
}

.autocomplete-result {
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
