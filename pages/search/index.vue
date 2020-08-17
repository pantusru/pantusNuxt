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
import FilterForm from "~/components/Forms/FulterProducts"
export default {
    components:{
        FilterForm,
    }
}
</script>

<style>

</style>