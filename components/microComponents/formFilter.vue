<template>
  <form action="" class="form-filter">
    <div class="filter-blog">
      <div class="filter-title">Цена, Р</div>
      <div class="filter-box">
        <div class="filter-box-plice">
          <div class="filter-name">От</div>
          <input id="" class="filter-input" min="0" type="number" name="" />
        </div>
        <div class="filter-box-plice">
          <div class="filter-name">До</div>
          <input id="" class="filter-input" min="0" type="number" name="" />
        </div>
      </div>
      <div class="filter-box-checkbox">
        <div class="filter-checkbox">
          <input class="input-checkbox" type="checkbox" />
          <label class="text-checkbox">В наличии</label>
        </div>
        <div class="filter-checkbox">
          <input class="input-checkbox" type="checkbox" />
          <label class="text-checkbox">Только с фото</label>
        </div>
        <div class="filter-checkbox">
          <input class="input-checkbox" type="checkbox" />
          <label class="text-checkbox">Новинки</label> <br />
          за
          <input
            id=""
            class="input-date-checkbox"
            min="0"
            type="number"
            name=""
          />
          дн.
        </div>
      </div>
    </div>
    <DataFormFilterVue :arr="brand" title="Бренд" max="5" />
    <DataFormFilterVue :arr="brand" title="Категории" max="5" />
    <DataFormFilterVue :arr="brand" title="Применимость" max="5" />
  </form>
</template>

<script>
import DataFormFilterVue from "./DataFormFilter.vue";

export default {
  components: {
    DataFormFilterVue,
  },
  data() {
    return {
      checkFull: false,
      brand: [
        { name: "3F QUALITY", kolvo: 5, val: "3F", id: 1 },
        { name: "РТИ", kolvo: 5, val: "RTI", id: 2 },
        { name: "AABearing", kolvo: 15, val: "22", id: 3 },
        { name: "AABearing", kolvo: 45, val: "22", id: 4 },
        { name: "РТИ", kolvo: 5, val: "RTI", id: 5 },
        { name: "AABearing", kolvo: 15, val: "22", id: 6 },
        { name: "AABearing", kolvo: 45, val: "22", id: 7 },
        { name: "РТИ", kolvo: 5, val: "RTI", id: 8 },
        { name: "AABearing", kolvo: 15, val: "22", id: 9 },
        { name: "AABearing", kolvo: 45, val: "22", id: 10 },
      ],
    };
  },
};
</script>

<style lang="sass">
.form-filter
    padding: 10px
    +size(2)
    border: 1px solid #e1e1e1
    // display: block
.filter-blog
    margin-bottom: 30px
.filter-title
    font-size: 14px
    margin-bottom: 10px
    font-weight: 700
.filter-box
    margin-bottom: 15px
    display: flex
    justify-content: space-between
.filter-box-plice
    +size(8)
.filter-name

.filter-input
    width: 100%
    font-size: 10px
.filter-box-checkbox
.input-checkbox
.text-checkbox
    font-size: 12px
    margin-left: 5px
.input-date-checkbox
    width: 45%
    margin-top: 5px
.filter-input.mb
    margin-bottom: 10px
.filter-checkbox-data
    display: flex
    justify-content: space-between
    align-items: center
    &.hidden
        display: none
.filter-more
    display: block
    margin-top: 10px
    font-size: 13px
    font-weight: 700
    color: #436174
    text-decoration: underline
    cursor: pointer
    &:hover
       text-decoration: none
</style>
