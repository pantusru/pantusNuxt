<template>
  <div :class="addClass" class="autocomplete">
    <b-input
      v-model="$v.Form.$model.Town"
      autocomplete="off"
      type="text"
      @input="onChange"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      @focus="getItems"
    />
    <ul v-show="isOpen" id="autocomplete-results" class="autocomplete-results">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
        @click="setResult(item.name, item.zip)"
      >
        {{ item.typeShort }}
        {{ item.name }}
        <span
          v-for="parent in item.parents"
          :key="parent.zip"
          class="text-muted"
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
  name: "Autocomplete",

  props: {
    addClass: {
      type: String,
      required: false,
    },
    $v: {},
  },
  data() {
    return {
      items: [], // Массив результата города
      timerId: null, // ID таймер для stop запросов
      isOpen: false, // состояние открыто ли меню
      arrowCounter: 0, // Index выделяющегося элемента списка
      id: 0, // ID выбранного поиска
    };
  },
  // computed: {
  //   search: {
  //     get() {
  //       return this.$store.getters["Order/Form/GetContact"].Town;
  //     },
  //     set(value) {
  //       value = value.replace(/[-[\]{}()*+?.,\\^$|#%]/g, "");
  //       // this.$store.commit("Order/Form/SetFull", {
  //       //   name: "Town",
  //       //   value,
  //       // });
  //     },
  //   },
  // },
  watch: {
    items() {
      this.getItems();
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    async GetData() {
      // Запрос загрузки данных
      this.items = [];
      const dataset = await this.$store.dispatch(
        "API/axios/_API_Town",
        this.$v.Form.$model.Town
      );
      if (dataset.result.length > 1) {
        let result = dataset.result;
        result = result.slice(1, result.length);
        // МАP
        for (const index in result) {
          this.items.push({
            id: result[index].id,
            zip: result[index].zip,
            typeShort: result[index].typeShort,
            name: result[index].name,
            parents: result[index].parents,
          });
        }
      }
    },
    getItems() {
      if (this.$store.getters.getOrderUpdateCity) {
        this.$store.commit("SetOrderUpdateCity", false);
        this.GetData();
      }
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
      this.$v.Form.$model.Town = this.$v.Form.$model.Town.replace(
        /[-[\]{}()*+?.,\\^$|#%]/g,
        ""
      );
      this.$store.dispatch("Order/Payment/Index/SetDostavkaExtra", false);
      this.$v.Form.$model.dostavka = undefined;
      // Пока отправлять запрос и изменение vuex
      // this.$emit("input", { data: this.search, id: this.id });
      this.SetValue();
    },
    setResult(result, zip) {
      // Была выбрана li
      this.$v.Form.$model.TownId = zip;
      this.$v.Form.$model.Town = result;
      this.isOpen = false;
      this.$store.dispatch("API/axios/_API_Russia", zip);
      // this.$emit("input", { data: this.search, id: this.id });
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
      this.$v.Form.$model.Town = this.items[this.arrowCounter].name;
      this.$v.Form.$model.TownId = this.items[this.arrowCounter].id;
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
