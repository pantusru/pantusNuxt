<template>
  <div>
    <b-button
      class="text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-2 cursor-pointer"
      @click="show = true"
      v-if="show == false"
      >Показать всё фильтры</b-button
    >
    <b-form class="border p-3" v-if="show">
      <b-button
        class="d-block d-lg-none text-666 border-e1 bg-transparent link-danger border-link-danger px-3 py-2 cursor-pointer mb-2"
        @click="show = false"
        >X</b-button>
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
import VueRange from "@/components/Search/range";
import Panel from "@/components/Search/Panel/index";
import PanelBrand from "@/components//Search/PanelBrand/index";
import Reset from "@/components/Search/buttons/buttonsReset";
import Submit from "@/components/Search/buttons/buttonSubmit";
export default {
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