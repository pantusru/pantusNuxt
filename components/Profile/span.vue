<template>
  <b-row class="align-items-center mb-3">
        <b-col cols="2" class="mr-4">{{name}}</b-col>
        <b-col cols="5">
            <b-form-input   
                v-mask="Vmask"
                :type="type" 
                v-model.trim="value" 
                :id="name"
                class="w-75" 
                size="sm">
            </b-form-input>
        </b-col>
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