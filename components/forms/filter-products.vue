<template>
  <div class="filter-box filter-box__shadow block-radius">
    <b-button
      class="text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-0 cursor-pointer d-flex align-items-center justify-content-between w-100 block-shadow block-radius other-filters-btn"
      @click="show = !show"
      v-show="show === false"
      >
      <img
        class="icon-filters mr-3"
        src="@img/icons/other-filters-red-5.svg"
        alt="Icon OtherFilters"
      />
      <span class="fz-5 font-weight-bold">Все фильтры</span>
      <b-icon-arrow-down-circle
        v-if="!show"
        class="cursor-pointer link-danger ml-3 arrow-icon-filters"
      />
      <b-icon-arrow-up-circle
        v-else
        class="cursor-pointer link-danger ml-3 arrow-icon-filters"
      />
    </b-button
    >
    <b-form class="border p-3 block-radius" v-show="show">




<!--      <b-button-->
<!--        class="d-block d-lg-none text-666 border-e1 bg-transparent link-danger border-link-danger px-2 py-0 cursor-pointer mb-2"-->
<!--        @click="show = false"-->
<!--        >X</b-button-->
<!--      >-->
      <!-- <Submit /> -->
      <!--      <VueRange />-->
      <!-- ЦЕНА-->
      <!-- БРЭНД -->
      <PanelBrand
        items="Бренд"
        name="brand"
        GetName="Brand/BrandAll/GetBrand"
        SetChecbox="formSearch/SetAllBrandsChecked"
        GetChecbox="formSearch/GetBrandsChecked"
      />
      <!-- Категории -->
      <Panel
        items="Категории"
        ArrayData="Categories/CategoriesAll/GetCategories"
        name="categories"
        SetValue="Categories/CategoriesAll/SetCategories"
      >
      </Panel>

      <b-button-group class="w-100 px-3">
        <div class="d-flex justify-content-between w-100 flex-wrap-reverse">
          <Submit />
          <Reset />
        </div>
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
import VueRange from "@/components/search/range";
import Panel from "@/components/search/panel/index";
import PanelBrand from "@/components/search/panel-brand/index";
import Reset from "@/components/search/buttons/buttons-reset";
import Submit from "@/components/search/buttons/button-submit";
export default {
  name: "fulter-products",
  data() {
    return {
      show: true,
    };
  },
  components: {
    VueRange,
    Panel,
    Reset,
    Submit,
    PanelBrand,
  },
};
</script>

<style>

.arrow-icon-filters{
  font-size: 20px;
}

.other-filters-btn:hover .icon-filters{
  transform: rotate( -360deg );
  transition: all 1s ease-out;
}




</style>
