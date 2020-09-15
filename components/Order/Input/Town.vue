<template>
  <div class="w-75">
      <b-input v-model="value" size="sm" :id="name">

      </b-input>
  </div>
</template>

<script>
import mixit from "@/mixins/Input/order"
export default {
    mixins:[mixit],
    props:{
        name:{}
    },
}
</script>

<style>

</style>