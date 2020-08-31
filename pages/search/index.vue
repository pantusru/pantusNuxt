<template>
<section class="mt-5">
  <div class="container">
      <b-row>
          <b-col cols="12" lg="3">
            <FilterForm/>
          </b-col>
      </b-row>
  </div>
</section>
</template>

<script>
import FilterForm from "@/components/Forms/FulterProducts"
export default {
   async fetch({query, store, getters, commit}){
    await Promise.all([
      store.dispatch("Categories/CategoriesAll/_Categories"),
      store.dispatch("Applicabilities/ApplicabilitiessAll/_Applicabilitiess"),
      // store.dispatch("Brand/BrandAll/_Brands")
    ])
    //   ПРОВЕРКА QUERY
    if(query.minvalue != undefined){
        store.commit("formSearch/SetMinValue", query.minvalue);
    }
    if(query.maxvalue != undefined){
      store.commit("formSearch/SetMaxValue", query.maxvalue);
    }
    if(query.categories !=undefined){
      store.dispatch("Catalog/All/_AllChexboxTrue", {data: getters["Categories/CategoriesAll/GetCategories"], ids:query.categories });
    }
    //   ПРОВЕРКА QUERY
  },
    components:{
        FilterForm,
    },
}
</script>

<style>

</style>