<template>
      <b-col cols="3">
     <div class="mr-3 form-control">
       <span v-if="SelectMarka.length != 0" >
          {{ Applicabilities.filter(dataset => dataset.id == SelectMarka)[0].name }}
       </span>
      </div>
      <b-form-select v-model="SelectMarka" :select-size="4">
        <template v-slot:first>
          <b-form-select-option
            @click="setDataModel(index)"
            v-for="(data, index) in Applicabilities"
            :key="data.id"
            :value="data.id"
            >{{ data.name }}</b-form-select-option
          >
        </template>
      </b-form-select>
    </b-col>
</template>

<script>
export default {

}
</script>

<style>

</style>