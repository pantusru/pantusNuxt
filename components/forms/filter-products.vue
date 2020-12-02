<template>
  <div>
    <b-button
      class="text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-2 cursor-pointer"
      @click="show = true"
      v-if="show === false"
      >Показать всё фильтры</b-button
    >
    <b-form class="border p-3" v-show="show">
      <b-button
        class="d-block d-lg-none text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-2 cursor-pointer mb-2"
        @click="show = false"
        >X</b-button
      >
      <!-- <Submit /> -->
      <VueRange />
      <!-- ЦЕНА-->
      <!-- БРЭНД -->
      <PanelBrand
        items="Брэнд"
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
      <!-- ПРиминимости -->
      <!-- <Panel
            items="Применимость"
            ArrayData="Applicabilities/ApplicabilitiessAll/GetApplicabilities"
            name="applicabilities"
            SetValue="Applicabilities/ApplicabilitiessAll/SetApplicabilities"
            >
        </Panel> -->

      <b-button-group>
        <Submit />
        <Reset />
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
