<template>
  <div class="filter-blog">
    <div class="filter-title">{{ title }}</div>
    <input type="text" class="filter-input mb" placeholder="Поиск по списку" >
    <div class="filter-box-checkbox">
      <div
        v-for="data in arr"
        :key="data.id"
        class="filter-checkbox-data"
        :class="{ hidden: data.id > max && !checkFull }"
      >
        <div class="filter-checkbox">
          <input :value="data.val" class="input-checkbox" type="checkbox" >
          <label class="text-checkbox">{{ data.name }} </label>
        </div>
        <span class="kolvo-checkbox">{{ data.kolvo }}</span>
      </div>
    </div>
    <div class="filter-more" @click="getFull">{{ textBnt }}</div>
  </div>
</template>

<script>
export default {
  props: ["arr", "title", "max"],
  data() {
    return {
      checkFull: false,
      textBnt: "Показать все",
    };
  },

  methods: {
    getFull() {
      this.checkFull = !this.checkFull;
      if (this.checkFull) {
        this.textBnt = "Скрыть";
      } else {
        this.textBnt = "Показать все";
      }
    },
  },
};
</script>

<style></style>
