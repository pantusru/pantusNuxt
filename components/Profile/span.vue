<template>
  <b-row class="align-items-center mb-3">
        <b-col cols="2" class="mr-4">{{name}}</b-col>
        <b-col cols="5" class="form-control form-control-sm">{{value}}</b-col>
    </b-row>
</template>

<script>
export default {
    props:{
        name:{},
        value:{},
    }
}
</script>

<style>

</style>