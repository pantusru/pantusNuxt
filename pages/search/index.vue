<template>
<section class="mt-5">
  <div class="container">
      <FilterApplicabilities/>
      <b-row>
        <b-col cols="12" lg="3">
          <FilterForm/>
        </b-col>
        <b-col lg="9">
          <b-table-simple   class="text-center fz-5_5">
            <PanelVid v-if="componentsName != 'TableProduct'" class="panelProductFilter mb-0"/>
          </b-table-simple>
            <components v-bind:is="componentsName" :array="Products"/>
        </b-col>
      </b-row>
  </div>
</section>
</template>

<script>
import FilterApplicabilities from "@/components/Forms/FilterApplicabilities"
import PanelVid from "@/components/Search/ProductPanel/table"
import FilterForm from "@/components/Forms/FulterProducts"
import TableProduct from "@/components/Table/product"
import productBlog from "@/components/Func/productBlog"
import productRow from "@/components/Func/productRow"
export default {
  async fetch({query, store, getters, commit}){
    await Promise.all([
      store.dispatch("Products/_ProductAll"), // Товары
      store.dispatch("Categories/CategoriesAll/_Categories"), // Категории
      store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"), // ПРиминимости 
      store.dispatch("Brand/BrandAll/_Brands"), // бренды
      store.dispatch("Selected/selected/_Selected"), // запрос избранные товары user
    ])
    //   ПРОВЕРКА QUERY
    if(query != undefined){
      if(query.minvalue != undefined){ // ПРОВЕРКА МИНИМУМА
          store.commit("formSearch/SetMinValue", query.minvalue);
      }
      if(query.maxvalue != undefined){// ПРОВЕРКА МАКСИМУМА
        store.commit("formSearch/SetMaxValue", query.maxvalue);
      }
      if(query.brand != undefined){// ПРОВЕРКА БРЕНДА
        let  brand = query.brand.split(',');
        brand.forEach(element => {
          store.commit("formSearch/SetBrandsChecked",  Number(element));
        });
      }
      if(query.categories !=undefined){ // ПРОВЕРКА КАТЕГОРИИ
        let ids = query.categories.split(",");
        store.dispatch("Catalog/All/_AllChexboxTrue", {data: store.getters["Categories/CategoriesAll/GetCategories"], ids:ids });
      }
      //  if(query.applicabilities !=undefined){// ПРОВЕРКА ПРИМИНИМОСТИ
      //   let ids = query.applicabilities.split(",");
      //   store.dispatch("Catalog/All/_AllChexboxTrue", {data: store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"], ids:ids });
      // }
      if(query.sort_name !=undefined){// ПРОВЕРКА СОРТИРОВКИ
        store.commit("formSearch/SetSort", 
          {SortType: query.sort_type, SortName: query.sort_name,});
      }
    }
    //   ПРОВЕРКА QUERY
  },
    components:{
        FilterForm,
        TableProduct,
        productBlog,
        productRow,
        PanelVid,
        FilterApplicabilities
    },
    computed: {
        Products() {
          return this.$store.getters["Products/GetProducts"]; 
        },
        componentsName() {
          return this.$store.getters["getProductType"]; 
        },
    },
    created(){
      this.$store.dispatch("Catalog/All/_AllVisible" , this.$store.getters["Categories/CategoriesAll/GetCategories"]);
      // this.$store.dispatch("Catalog/All/_AllVisible" , this.$store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"]);
    },
}
</script>