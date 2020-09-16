<template>
<section class="mt-5">
  <div class="container">
      <b-row>
        <b-col cols="12" lg="3">
          <FilterForm />
        </b-col>
        <b-col class="pl-5" lg="9">
          <TableProduct/>
        </b-col>
      </b-row>
  </div>
</section>
</template>

<script>
import FilterForm from "@/components/Forms/FulterProducts"
import TableProduct from "@/components/Table/product"
export default {
   async fetch({query, store, getters, commit}){
    await Promise.all([
      store.dispatch("Products/popular/_ProductPopual"),
      store.dispatch("Categories/CategoriesAll/_Categories"),
      store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"),
      store.dispatch("Brand/BrandAll/_Brands")
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
       if(query.applicabilities !=undefined){// ПРОВЕРКА ПРИМИНИМОСТИ
        let ids = query.applicabilities.split(",");
        store.dispatch("Catalog/All/_AllChexboxTrue", {data: store.getters["Applicabilities/ApplicabilitiessAll/GetApplicabilities"], ids:ids });
      }
    }
    //   ПРОВЕРКА QUERY
  },
    components:{
        FilterForm,
        TableProduct
    },
}
</script>

<style>

</style>