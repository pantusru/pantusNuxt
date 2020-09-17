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
        @focus="isOpen = true"
    />
    <ul
        id="autocomplete-results"
        v-show="isOpen"
        class="autocomplete-results"
    >
      <li
          v-for="(item, i) in items"
          :key="i"
          @click="setResult(item.name, item.id)"
          class="autocomplete-result"
          :class="{ 'is-active': i === arrowCounter }"
      >
        {{ item.typeShort }}
        {{ item.name}}
        <span class="text-muted"  v-for="parent in item.parents" :key="parent.id">
            <template v-if="parent.typeShort == 'Респ'">
              {{ parent.typeShort}} {{parent.name }}
            </template>
            <template v-else>
              {{ parent.name}} {{parent.typeShort }}
            </template>
        </span>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  name: 'autocomplete',

  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    addClass:{
      type: String,
      required: false,
    }
  },

  data() {
    return {
      isOpen: false,
      search: '',
      isLoading: false,
      arrowCounter: 0,
      id: 0,
    };
  },
  methods: {
    onChange() {
      this.$emit('input', {data: this.search , id: this.id});
      this.isOpen = true;
    },
    setResult(result ,id) {
      this.id = id;
      this.search = result;
      this.isOpen = false;
    },
    onArrowDown() {
      if (this.arrowCounter < this.items.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter -1;
      }
    },
    onEnter() {
      this.search = this.items[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  }
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
  height: 120px;
  overflow: auto;
  width: 100%;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4AAE9B;
  color: white;
}

</style>
